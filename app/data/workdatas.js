import Link from "next/link";

export const workdatas = [
    {
        slug: "work1",
        status: true,
        title: "ポートフォリオサイト",
        tools: ["Next.js","React","Framer Motion","Tailwind CSS"],
        image: "/workimages/pf-site.jpg",
        gitUrl: "https://github.com/mh653/moe-pf",
        vercelUrl: "https://moe-pf.vercel.app/",
        description: ["ポートフォリオサイトをNext.jsで作成しました。","CSSはTailwindで記述し、アニメーションライブラリはMotionを使用しました。","簡潔に見て頂けるよう、スッキリしたレイアウトを心がけました。"]
    },
    {
        slug: "work2",
        status: true,
        title: "ねこゲーム",
        tools: ["JavaScript"],
        image: "/workimages/neko-game.jpg",
        gitUrl: "https://github.com/mh653/neko-game",
        vercelUrl: "https://neko-game-azure.vercel.app/",
        description: ["JavaScriptの練習でゲームを自作しました。","エラーチェックや時間の制御を工夫したり、ロジックを考えるのが面白かったです。","猫のイラストはCanvaAIで生成しました。"]
    },
    {
        slug: "work3",
        status: true,
        title: "Simple Closet",
        tools: ["Next.js","React","Supabase","WeatherAPI","PWA"],
        image: "/workimages/sc.jpg",
        gitUrl: "https://github.com/mh653/simple-closet",
        vercelUrl: "https://simple-closet.vercel.app/",
        description: ["Next.jsとSupabaseを使用して、シンプルで操作性の良いクローゼットアプリを制作しました。","「ファッション好きではないが、毎日ベストな服装で過ごしたい人」をターゲットとし、多機能すぎず丁度良く管理できるアプリを目指しました。"]
        // ,<a href="https://www.canva.com/design/DAHC2bORpB0/Yv5ygY2IEOLhuFH-DwP1mA/view?utm_content=DAHC2bORpB0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec0a81720c">資料</a>
    },
    {
        slug: "work4",
        status: false,
        title: "MINI WALLET Lab",
        tools: ["Python","Flask","MySQL","XAMPP",],
        image: "/workimages/mw-lab.jpg",
        gitUrl: "https://github.com/mh653/mini-wallet-lab",
        vercelUrl: "",
        description: ["PythonとMySQLでショッピングサイトのデモを制作中です。","3月中に公開予定です。"],
    },
    // {
    //     slug: "work5",
    //     status: true,
    //     title: "Work Sample⑤",
    //     tools: ["","","","",],
    //     image: "/workimages/no-image.svg",
    //     gitUrl: "",
    //     vercelUrl: "",
    //     description: ["","","","",],
    // },
]
