const data: Record<string, { default: any }> = 
    import.meta.glob('@data/*.json', { eager: true });

type ResumeParams = { lang: string; };

export function GET({ params }: { params: ResumeParams }) {
    const lang = params.lang || 'es';
    const langData = data[`/src/data/${lang}.json`]?.default;
    return new Response(JSON.stringify(langData));
}

export function getStaticPaths() {
    return [
        { params: { lang: "es" } },
        { params: { lang: "en" } }
    ];
}

