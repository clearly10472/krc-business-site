"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Instagram, PenLine, Clock, CheckCircle, MapPin,
  Zap, BarChart2, RefreshCw, ArrowRight,
  Star, MessageSquare,
} from "lucide-react";

function FBLLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const h = size === "sm" ? 36 : 44;
  return (
    <div className="flex items-center gap-3">
      <Image src="/generated/FBLlogo.png" alt="FlowBoost Lab" height={h} width={Math.round(h * (549 / 273))} style={{ height: h, width: "auto" }} />
      <span className="font-bold tracking-wide text-sm" style={{ color: "#4A7C59" }}>FlowBoost Lab</span>
    </div>
  );
}

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}


const services = [
  {
    icon: Instagram, color: "var(--card-green)", iconColor: "#4a7c59",
    number: "01", subtitle: "半自動化パック",
    title: "SNS運用おまかせAI",
    desc: "Instagram投稿の企画・キャプション作成、ブログ記事の自動生成をまるっとお任せ。送られてきた内容をコピペするだけでプロ品質の投稿が完成します。",
    result: ["投稿文・画像をAIが生成、あとはコピペするだけ", "毎日でも週1でも、自分のペースで投稿し続けられる", "投稿が積み重なるほどフォロワーが育ち、信頼が資産になる"],
    price: "月額 3〜5万円",
    tags: ["Instagram", "ブログ", "投稿スケジュール"],
    img: "/generated/service-sns.jpg",
  },
  {
    icon: PenLine, color: "var(--card-orange)", iconColor: "#e8a055",
    number: "02", subtitle: "ライティングサポート",
    title: "集客文章おまかせAI",
    desc: "チラシ・DM・メルマガ・LINE配信・Googleビジネスプロフィールの投稿文をAIで作成。プロ品質の文章が最短即日で届きます。",
    result: ["文章作成：毎回2〜3時間 → 最短15分", "外注費ゼロで、プロ品質の文章が何本でも", "やりとりを重ねるほど、あなたのお店らしい文章に育っていく"],
    price: "月額 2〜4万円",
    tags: ["チラシ", "LINE配信", "MEO対策"],
    img: "/generated/service-writing.jpg",
  },
  {
    icon: Clock, color: "var(--card-purple)", iconColor: "#6366f1",
    number: "03", subtitle: "バックオフィス自動化",
    title: "業務まるっと時短AI",
    desc: "報告書・議事録・日報の作成、メール返信文の自動生成、問い合わせ対応の仕組み構築まで。スタッフが本業に集中できる環境をつくります。",
    result: ["毎日の定型作業を自動化", "月10〜20時間の本業復帰", "余裕のあるオーナーが、いいサービスを生む"],
    price: "月額 5〜10万円",
    tags: ["報告書", "メール対応", "自動化"],
    img: "/generated/service-automation.jpg",
  },
];

const plans = [
  { name: "ライト", price: "3〜5万円", desc: "SNS運用 or 集客文章どちらか1つ", features: ["月次レポート", "メールサポート", "1ヶ月トライアル"], highlight: false },
  { name: "スタンダード", price: "5〜8万円", desc: "SNS運用 ＋ 集客文章", features: ["月次レポート", "LINEサポート", "1ヶ月トライアル", "定例MTG（月1回）"], highlight: true },
  { name: "プレミアム", price: "10〜15万円", desc: "全サービスフルパック", features: ["月次レポート", "優先LINEサポート", "1ヶ月トライアル", "定例MTG（月2回）", "業務フロー設計"], highlight: false },
];

const reasons = [
  { icon: Zap, color: "var(--card-orange)", iconColor: "#e8a055", title: "完成品が届きます", desc: "難しい操作は一切ありません。こちらで作って、そのままお渡しします。受け取ったらコピペするだけ。それだけです。" },
  { icon: BarChart2, color: "var(--card-green)", iconColor: "#4a7c59", title: "小さく始められる", desc: "月3万円〜、1ヶ月トライアルから。初期費用ゼロで、効果を確かめてから継続できます。" },
  { icon: MapPin, color: "var(--card-blue)", iconColor: "#3b82f6", title: "ローカル密着", desc: "地元の企業が抱えるリアルな悩みを理解した上でサポート。顔の見える関係で信頼を築きます。" },
  { icon: RefreshCw, color: "var(--card-purple)", iconColor: "#6366f1", title: "効果が出るまで、一緒に動きます", desc: "納品して終わり、ではありません。「なんか違う」「もっとこうしたい」があれば相談しながら調整します。あなたのビジネスが楽になることが、ゴールです。" },
  { icon: Star, color: "var(--card-orange)", iconColor: "#e8a055", title: "「ChatGPTで作ったけど、なんか違う…」その感覚、正解です。", desc: "ChatGPTやGeminiに「ブログ記事を書いて」と頼んだことはありませんか？何度も指示を出して、手直しして、それでもどこかよそよそしい文章が出てくる。あの体験です。原因は単純で、汎用AIはあなたのお店のことを何も知らないから。FlowBoost Labが構築するのは、あなたのサービス・言葉遣い・お客様の雰囲気をあらかじめ読み込んだ専用のAIです。だから一発で「お店らしい文章」が出てくる。ChatGPTと何が違うかって、そこです。", wide: true },
];


export default function Home() {
  const heroRef = useFadeUp();
  const statsRef = useFadeUp();
  const painRef = useFadeUp();
  const howRef = useFadeUp();
  const servicesRef = useFadeUp();
  const caseRef = useFadeUp();
  const reasonsRef = useFadeUp();
  const aboutRef = useFadeUp();
  const pricingRef = useFadeUp();
  const ctaRef = useFadeUp();

  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg)", color: "var(--fg)" }}>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80" style={{ background: "rgba(250,250,248,0.85)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <FBLLogo />
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-sm text-stone-500">
              <a href="#services" className="hover:text-stone-800 transition-colors">サービス</a>
              <a href="#pricing" className="hover:text-stone-800 transition-colors">料金</a>
            </nav>
            <a href="#contact" className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-colors" style={{ background: "var(--green)" }}>
              無料相談する
            </a>
          </div>
          <a href="#contact" className="md:hidden text-xs font-semibold text-white px-4 py-2 rounded-full" style={{ background: "var(--green)" }}>
            無料相談
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden pt-16">
        <Image src="/generated/hero.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/60" />
        <div ref={heroRef} className="fade-up relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-stone-300 rounded-full px-4 py-1.5 mb-8 bg-white/80">
            <Star className="w-3.5 h-3.5" style={{ color: "var(--orange)" }} fill="currentColor" />
            <span className="text-xs tracking-widest uppercase text-stone-500">AI Business Support</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.15] mb-6" style={{ color: "var(--fg)" }}>
            時間が増える。売上が動く。<br />それがAIの仕事。
          </h1>
          <p className="text-lg text-stone-500 max-w-xl mx-auto leading-relaxed mb-10">
            SNS更新・集客文章・定型業務。<br />
            地元のお店が抱える"時間のムダ"を、AIでまるごと解消します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-colors" style={{ background: "var(--green)" }}>
              まずは無料で相談する <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 text-stone-600 font-medium px-8 py-4 rounded-full border border-stone-300 bg-white/80 hover:bg-white transition-colors">
              サービスを見る
            </a>
          </div>
          <p className="mt-6 text-xs text-stone-400 tracking-wide">押し売り一切なし · 無料相談</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-14 px-6" style={{ background: "var(--fg)" }}>
        <div ref={statsRef} className="fade-up max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { n: "初心者でも安心", l: "AIが初めてでも、丁寧にサポートします" },
            { n: "地域密着", l: "対面・オンライン、どちらにも対応" },
            { n: "小さく始められる", l: "まず1つの業務から、気軽に試せます" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-xl font-black text-white mb-2">{s.n}</div>
              <div className="text-sm text-stone-400 leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pain Points ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={painRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>Pain Points</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4" style={{ color: "var(--fg)" }}>
              「やらなきゃ」は分かってる。
            </h2>
            <p className="text-center text-stone-400 text-lg mb-14">でも、時間がない。</p>
            <div className="flex flex-col gap-8">
              {[
                { img: "/generated/pain-sns-1.jpg", title: "SNS更新が続かない", text: "何を書けばいいか分からない。投稿を考える時間がない。やらなきゃと思いながら、気づけば1ヶ月が過ぎる。", reverse: false },
                { img: "/generated/pain-writing.jpg", title: "文章づくりに時間を取られる", text: "チラシやDMの文章を考えるのに毎回何時間もかかる。プロに頼むには費用が高すぎる。", reverse: true },
                { img: "/generated/pain-admin.jpg", title: "事務作業が本業を圧迫する", text: "報告書・日報・メール返信に追われて本業に集中できない。スタッフも同じ状況で疲弊している。", reverse: false },
              ].map((item) => (
                <div key={item.title} className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-0 rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-white`}>
                  <div className="md:w-1/2 h-56 md:h-72 relative">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-black mb-4" style={{ color: "var(--fg)" }}>{item.title}</h3>
                    <p className="text-stone-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-stone-400">
              それ、AIに任せれば<span className="font-black text-lg ml-1" style={{ color: "var(--fg)" }}>解決できます。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-28 px-6" style={{ background: "#f0ede8" }}>
        <div className="max-w-4xl mx-auto">
          <div ref={howRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>How it works</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: "var(--fg)" }}>3ステップで始められる</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                { step: "01", title: "無料相談", desc: "LINEで気軽にご連絡ください。業種・状況・お悩みを聞かせてください。" },
                { step: "02", title: "プラン提案", desc: "お話を元に、最適なサービス内容と料金をご提案します。" },
                { step: "03", title: "運用開始", desc: "こちらで全て作成して届けます。あなたはコピペするだけでOKです。" },
              ].map((item, i) => (
                <div key={item.step} className="relative text-center">
                  {i < 2 && <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px border-t-2 border-dashed border-stone-300" />}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-black text-lg" style={{ background: "var(--green)" }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--fg)" }}>{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={servicesRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>Services</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: "var(--fg)" }}>3つのサービス</h2>
            <div className="flex flex-col gap-8">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.number} className="card-hover rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-sm">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 h-48 md:h-auto relative shrink-0">
                        <Image src={s.img} alt={s.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 p-5 md:p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: s.color }}>
                            <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                          </div>
                          <div>
                            <p className="text-xs text-stone-400">{s.subtitle}</p>
                            <h3 className="font-black text-lg" style={{ color: "var(--fg)" }}>{s.title}</h3>
                          </div>
                          <span className="ml-auto text-4xl font-black text-stone-100">{s.number}</span>
                        </div>
                        <p className="text-sm text-stone-500 leading-relaxed mb-5">{s.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {s.tags.map((t) => (
                            <span key={t} className="text-xs px-3 py-1 rounded-full border border-stone-200 text-stone-500">{t}</span>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="rounded-xl px-4 py-3 flex-1 text-sm" style={{ background: "var(--card-green)" }}>
                            <p className="text-xs text-stone-400 mb-2">成果イメージ</p>
                            <ul className="flex flex-col gap-1">
                              {s.result.map((r: string) => (
                                <li key={r} className="flex items-start gap-1.5" style={{ color: "var(--fg)" }}>
                                  <span style={{ color: "var(--green)", marginTop: 2 }}>✓</span>
                                  <span className="font-medium leading-snug">{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-xl px-4 py-3 text-sm shrink-0" style={{ background: "var(--fg)", color: "white" }}>
                            <p className="text-xs text-stone-400 mb-0.5">料金目安</p>
                            <p className="font-bold">{s.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Study ── */}
      <section className="py-28 px-6" style={{ background: "#f0ede8" }}>
        <div className="max-w-5xl mx-auto">
          <div ref={caseRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>Case Study</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: "var(--fg)" }}>導入事例</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <Image src="/generated/seitaisitunai.jpg" alt="整体院" fill className="object-cover" />
                </div>
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5" style={{ background: "var(--card-green)", color: "var(--green)" }}>整体院</span>
                  <h3 className="text-2xl font-black mb-4" style={{ color: "var(--fg)" }}>「書く時間がない」を解消。<br />施術に集中できる環境へ。</h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-6">
                    「やらなきゃとは分かってるけど、施術が終わったら何も書く気になれない」——そんな状態から抜け出すために3つを導入。
                  </p>
                  <ul className="text-sm text-stone-600 leading-relaxed mb-8 flex flex-col gap-3">
                    <li><span className="font-bold" style={{ color: "var(--fg)" }}>ホットペッパーブログ：</span>週1〜2本の記事をAIが生成。コピペするだけで投稿完了。継続することでアクティブ評価が上がり、検索上位に表示されやすくなった。</li>
                    <li><span className="font-bold" style={{ color: "var(--fg)" }}>Instagram投稿：</span>AIがキャプション＋画像案を作成。確認してそのまま投稿するだけ。</li>
                    <li><span className="font-bold" style={{ color: "var(--fg)" }}>その他SNS：</span>投稿のネタ切れがなくなり、発信が続くようになった。</li>
                  </ul>
                  <div className="rounded-xl p-4 text-sm italic text-stone-500 border border-stone-100" style={{ background: "var(--card-green)" }}>
                    「書くことを考える」という一番しんどい部分がなくなったことで、施術に集中できるようになりました。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={reasonsRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>Why FlowBoost Lab</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: "var(--fg)" }}>選ばれる理由</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className={`card-hover flex gap-5 bg-white border border-stone-100 rounded-2xl p-8 shadow-sm${r.wide ? " md:col-span-2" : ""}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: r.color }}>
                      <Icon className="w-5 h-5" style={{ color: r.iconColor }} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2" style={{ color: "var(--fg)" }}>{r.title}</h3>
                      <p className="text-sm text-stone-500 leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-28 px-6" style={{ background: "var(--fg)" }}>
        <div className="max-w-4xl mx-auto">
          <div ref={aboutRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>About</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-white">運営者について</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10">
                  <Image src="/KRC.png" alt="KRC" width={160} height={160} className="object-cover w-full h-full" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-1">KRC</h3>
                <p className="text-sm mb-6" style={{ color: "var(--green)" }}>Shimoya</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["YouTubeチャンネル「KRC禁煙大学」", "著書2冊"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/20 text-stone-400">{tag}</span>
                  ))}
                </div>
                <p className="text-stone-300 leading-relaxed">
                  AIに可能性を感じてから、お金と時間を突っ込んで自分で試しまくっている人間です。その試行錯誤の積み重ねをそのままサービスにしました。
                  <br /><br />
                  難しい話は一切なし。あなたのビジネスが楽になることだけを考えます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-28 px-6" style={{ background: "#f0ede8" }}>
        <div className="max-w-4xl mx-auto">
          <div ref={pricingRef} className="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-center mb-3" style={{ color: "var(--green)" }}>Pricing</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16" style={{ color: "var(--fg)" }}>料金プラン</h2>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((p) => (
                <div key={p.name} className={`card-hover rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative ${p.highlight ? "md:scale-105 shadow-2xl" : "bg-white border border-stone-200"}`}
                  style={p.highlight ? { background: "var(--fg)" } : {}}>
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full bg-white" style={{ color: "var(--green)" }}>人気</span>
                  )}
                  <div>
                    <h3 className={`text-lg font-black mb-1 ${p.highlight ? "text-white" : ""}`} style={p.highlight ? {} : { color: "var(--fg)" }}>{p.name}</h3>
                    <p className="text-xs text-stone-400">{p.desc}</p>
                  </div>
                  <div>
                    <span className={`text-4xl font-black ${p.highlight ? "text-white" : ""}`} style={p.highlight ? {} : { color: "var(--fg)" }}>¥{p.price}</span>
                    <span className="text-sm text-stone-400 ml-1">/月</span>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "var(--green)" }} />
                        <span className={p.highlight ? "text-stone-300" : "text-stone-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact"
                    className="text-center text-sm font-semibold py-3 rounded-xl transition-colors"
                    style={p.highlight ? { background: "white", color: "var(--fg)" } : { background: "var(--green)", color: "white" }}>
                    相談する
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-stone-400 text-sm">※ 初回1ヶ月トライアルあり。料金はすべて税別です。</p>
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section id="contact" className="relative py-28 px-6 overflow-hidden text-center">
        <Image src="/generated/cta-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/70" />
        <div ref={ctaRef} className="fade-up relative z-10 max-w-xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--green)" }}>Contact</p>
          <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: "var(--fg)" }}>まずは、話してみてください。</h2>
          <p className="text-stone-500 leading-relaxed mb-12">
            「うちに合うか分からない」「何から始めればいいか分からない」<br />
            そんな状態でも大丈夫です。無料でご相談を受け付けています。
          </p>
          <div className="inline-block bg-white border border-stone-200 rounded-2xl p-6 md:p-10 mb-8 shadow-sm">
            <div className="w-44 h-44 rounded-xl mx-auto flex flex-col items-center justify-center gap-2 border border-stone-200" style={{ background: "var(--card-green)" }}>
              <MessageSquare className="w-8 h-8" style={{ color: "var(--green)" }} />
              <p className="text-sm text-stone-400 text-center leading-relaxed">LINE QRコード<br />準備中</p>
            </div>
            <p className="text-stone-500 text-sm mt-5">LINEで友達追加して<br />気軽にメッセージしてください</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-400 text-xs">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--green)" }} />返信24時間以内</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--green)" }} />押し売りなし</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--green)" }} />無料相談</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-stone-200 text-center" style={{ background: "var(--bg)" }}>
        <div className="flex justify-center mb-3"><FBLLogo size="sm" /></div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-stone-400 mb-4">
          <a href="/privacy" className="hover:text-stone-600 transition-colors">プライバシーポリシー</a>
          <a href="/tokusho" className="hover:text-stone-600 transition-colors">特定商取引法に基づく表記</a>
          <a href="/terms" className="hover:text-stone-600 transition-colors">利用規約</a>
        </div>
        <p className="text-xs text-stone-400">© 2026 FlowBoost Lab. All rights reserved.</p>
      </footer>
    </main>
  );
}
