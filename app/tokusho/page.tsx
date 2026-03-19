import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | FlowBoost Lab",
  description: "FlowBoost Labの特定商取引法に基づく表記です。",
};

const items: { label: string; value: React.ReactNode }[] = [
  { label: "事業者名", value: "FlowBoost Lab" },
  { label: "運営責任者", value: "Shimoya" },
  {
    label: "所在地",
    value: "請求があり次第、遅滞なく開示いたします。",
  },
  {
    label: "電話番号",
    value: "請求があり次第、遅滞なく開示いたします。",
  },
  { label: "メールアドレス", value: "simoyou.pc@gmail.com" },
  {
    label: "サービス内容",
    value: "AIを活用したSNS運用・集客文章作成・業務効率化の代行・システム構築サービス",
  },
  {
    label: "料金",
    value: (
      <>
        <p style={{ margin: 0 }}>各プランの月額料金（税込）は以下の通りです。</p>
        <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
          <li>ライトプラン：33,000円〜55,000円（税込）</li>
          <li>スタンダードプラン：55,000円〜88,000円（税込）</li>
          <li>プレミアムプラン：110,000円〜165,000円（税込）</li>
        </ul>
        <p style={{ margin: 0 }}>※ プランの詳細・最終金額はご相談の上で確定します。</p>
      </>
    ),
  },
  {
    label: "支払い方法",
    value: "銀行振込（振込手数料はお客様負担）※ その他の支払い方法についてはご相談時にご案内します。",
  },
  {
    label: "支払い時期",
    value: "毎月月末締め・翌月初旬にご請求します。請求書発行後、指定期日までにお支払いください。",
  },
  {
    label: "サービス提供時期",
    value: "ご入金確認後、原則5営業日以内にサービスを開始します。",
  },
  {
    label: "解約・キャンセルについて",
    value: (
      <>
        <p style={{ margin: 0 }}>月額サービスは、毎月末日までにメールにてご連絡いただいた場合、翌月より解約となります。</p>
        <ul style={{ paddingLeft: 24, marginTop: 8, marginBottom: 8 }}>
          <li>最低契約期間の定めはありません。いつでも解約できます。</li>
          <li>解約のお申し出は <strong>simoyou.pc@gmail.com</strong> までメールにてご連絡ください。</li>
          <li>すでにご提供済みのサービス期間分の料金は返金対象外となります。</li>
          <li>未提供期間分の料金がある場合は、個別にご相談の上、対応いたします。</li>
        </ul>
        <p style={{ margin: 0 }}>※ クーリング・オフ制度の適用対象外となります（通信販売のため）。</p>
      </>
    ),
  },
  {
    label: "動作環境",
    value: "インターネット環境およびスマートフォンまたはパソコンがあればご利用いただけます。",
  },
];

export default function TokushoPage() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e8e8e4", padding: "0 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: 18, color: "var(--fg)", textDecoration: "none", letterSpacing: "-0.02em" }}>
            FlowBoost Lab
          </Link>
          <Link href="/" style={{ fontSize: 14, color: "#666", textDecoration: "none" }}>
            ← トップに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 8 }}>
          特定商取引法に基づく表記
        </h1>
        <p style={{ fontSize: 14, color: "#888", marginBottom: 48 }}>
          特定商取引に関する法律第11条に基づき、以下の通り表示します。
        </p>

        <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e8e8e4" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                borderBottom: i < items.length - 1 ? "1px solid #e8e8e4" : "none",
              }}
            >
              <div
                style={{
                  padding: "20px 24px",
                  background: "#f4f4f0",
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                {item.label}
              </div>
              <div style={{ padding: "20px 24px", fontSize: 15, lineHeight: 1.8, color: "#333" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 40, fontSize: 14, color: "#888", lineHeight: 1.8 }}>
          ※ 上記情報は予告なく変更される場合があります。最新の情報は当ページをご確認ください。<br />
          ※ 所在地・電話番号は、請求があり次第、遅滞なく開示いたします（特定商取引法施行規則第8条に基づく）。
        </p>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e8e8e4", padding: "32px 24px", textAlign: "center", fontSize: 13, color: "#999" }}>
      <div style={{ marginBottom: 12, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
        <Link href="/privacy" style={{ color: "#999", textDecoration: "none" }}>プライバシーポリシー</Link>
        <Link href="/tokusho" style={{ color: "#999", textDecoration: "none" }}>特定商取引法</Link>
        <Link href="/terms" style={{ color: "#999", textDecoration: "none" }}>利用規約</Link>
      </div>
      <p style={{ margin: 0 }}>© 2026 FlowBoost Lab. All rights reserved.</p>
    </footer>
  );
}
