// Formata horas decimais para "HH:mm"
export function formatHoursAndMinutes(decimalHours: number): string {
    const hours = Math.floor(decimalHours);
    const minutes = Math.round((decimalHours - hours) * 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

// Gera um mapa de cores por disciplina
export function getSubjectColors(subjects: { name: string }[], colors: string[]) {
    return subjects.reduce((acc, s, i) => {
        acc[s.name] = colors[i % colors.length];
        return acc;
    }, {} as Record<string, string>);
}

// Calcula pesos, cargas e metas por disciplina
export function computeSubjects(
    subjects: { name: string; score: number }[],
    totalScore: number,
    weeklyLoad: number
) {
    return subjects.map((subject) => {
        const relativeWeight = subject.score / totalScore;
        const load = weeklyLoad * relativeWeight;
        return {
            ...subject,
            relativeWeight: relativeWeight.toFixed(2),
            load: load.toFixed(2),
            goal: formatHoursAndMinutes(load),
        };
    });
}

// Gera o ciclo sequencial em blocos de 60min
export function generateSequentialCycle(
    computed: { name: string; goal: string }[],
    weeklyLoad: number
) {
    const sequentialCycle = [];
    const blockSize = 60;
    let remainingLoad = weeklyLoad * 60;

    const timeGoals = computed.map((subject) => {
        const [h, m] = subject.goal.split(":".toString()).map(Number);
        return {
            name: subject.name,
            time: h * 60 + m,
        };
    });

    let remainingGoals = timeGoals.map((d) => ({ ...d }));

    while (remainingLoad > 0 && remainingGoals.some((d) => d.time > 0)) {
        for (let i = 0; i < remainingGoals.length; i++) {
            const d = remainingGoals[i];
            if (d.time > 0 && remainingLoad > 0) {
                const time = Math.min(blockSize, d.time, remainingLoad);
                sequentialCycle.push({ name: d.name, time });
                d.time -= time;
                remainingLoad -= time;
            }
        }
        remainingGoals = remainingGoals.filter((d) => d.time > 0);
    }

    return sequentialCycle;
}

// Dados para o gráfico de pizza
export function buildChartData(
    sequentialCycle: { name: string; time: number }[]
) {
    return sequentialCycle.map((item, i) => ({
        name: `${item.name} ${i + 1}`,
        value: item.time,
        subject: item.name,
    }));
}

// Legenda customizada
export function buildCustomLegend(
    sequentialCycle: { name: string }[],
    subjectColors: Record<string, string>
) {
    const uniqueSubjects = [...new Set(sequentialCycle.map((d) => d.name))];
    return uniqueSubjects.map((name) => ({
        name,
        color: subjectColors[name],
    }));
}
