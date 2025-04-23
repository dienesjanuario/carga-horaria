export interface Valor {
    id: string,
    topGlobal: number,
    User: string,
    TotalJobs: string,
    TotalMass: string,
    Averagedelivery: string,
    TotalDistance: string,
    FlagCountry: string
}

export async function pegarDados(): Promise<Valor[]> {
    const dados = await fetch("https://ets2.online/ajax_fetch.php", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-kl-saas-ajax-request": "Ajax_Request",
            "Referer": "https://ets2.online/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET",
        next: {
            revalidate: 6000, 
            tags: ["dados"]
        }
    }).then(r => r.json())

    
    const sortedData = dados.sort((a: Valor, b: Valor) => Number(b.TotalDistance) - Number(a.TotalDistance));
    const withEntries = Object.entries(sortedData)
    return withEntries.map(([k, valor]) => ({
            topGlobal: k,
            
            ...(valor as any)
        })).filter((item: Valor) => item.FlagCountry == "bra")
} 