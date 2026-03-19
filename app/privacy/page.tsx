import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | FlowBoost Lab",
  description: "FlowBoost Labのプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>
        <p style={{ fontSize: 14, color: "#888", marginBottom: 48 }}>制定日：2026年3月19日</p>

        <div style={{ lineHeight: 1.9, fontSize: 15, color: "#333" }}>

          <Section title="1. 事業者情報">
            <p>FlowBoost Lab（個人事業主、以下「当方」）は、ご利用者様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律（個人情報保護法）およびその他関連法令を遵守し、適切に管理します。</p>
          </Section>

          <Section title="2. 収集する個人情報">
            <p>当方は、以下の個人情報を収集することがあります。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>氏名・担当者名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>会社名・屋号</li>
              <li>LINEアカウント情報（LINEでお問い合わせいただいた場合）</li>
              <li>お問い合わせ・ご相談内容</li>
              <li>ウェブサイトのアクセスログ（IPアドレス、閲覧ページ、アクセス日時、ブラウザ情報など）</li>
            </ul>
          </Section>

          <Section title="3. 個人情報の利用目的">
            <p>収集した個人情報は、以下の目的に限り使用します。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>お問い合わせ・ご相談への回答および対応</li>
              <li>サービスのご提供・ご契約・請求に関する連絡</li>
              <li>ご提供するAI業務効率化システムの構築・運用・改善</li>
              <li>サービスに関するご案内・重要なお知らせの送付</li>
              <li>アクセス解析によるウェブサイトの改善</li>
              <li>法令に基づく対応</li>
            </ul>
          </Section>

          <Section title="4. AIを用いた情報処理について">
            <p>当方が提供するサービスは、AIツール（大規模言語モデル等）を活用してコンテンツの生成・業務効率化を行います。サービス提供にあたり、お客様からご提供いただいた業務情報や文章をAIシステムで処理することがあります。</p>
            <p style={{ marginTop: 12 }}>当方が利用するAIサービスのプライバシーポリシーについては、各サービス提供元の規約をご確認ください。機密性の高い情報をAIシステムに入力する際は、事前にご相談ください。</p>
          </Section>

          <Section title="5. 第三者への提供">
            <p>当方は、以下のいずれかに該当する場合を除き、収集した個人情報を第三者に提供しません。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命・身体・財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成のために特に必要な場合</li>
            </ul>
            <p style={{ marginTop: 12 }}>なお、サービスの提供にあたり、業務委託先（クラウドサービス事業者等）に必要な範囲で個人情報を提供する場合があります。その際は、委託先において適切な安全管理が図られるよう必要な監督を行います。</p>
          </Section>

          <Section title="6. Cookieおよびアクセス解析">
            <p>当サイトでは、サービス改善を目的としてGoogle Analytics（Google LLC）を使用しています。Google AnalyticsはCookieを使用してアクセスデータを収集しますが、個人を特定する情報は含まれません。</p>
            <p style={{ marginTop: 12 }}>収集されたデータはGoogleのプライバシーポリシーに基づき管理されます。Google Analyticsによるデータ収集を希望されない場合は、以下のオプトアウトアドオンをご利用ください。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "#4A7C59" }}>
                  Google Analyticsオプトアウトアドオン
                </a>
              </li>
              <li>
                <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" style={{ color: "#4A7C59" }}>
                  Google Analytics利用規約
                </a>
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>また、ブラウザの設定からCookieを無効にすることもできます。</p>
          </Section>

          <Section title="7. 安全管理措置">
            <p>当方は、収集した個人情報への不正アクセス、紛失、破壊、改ざん、漏えい等のリスクに対して、以下の安全管理措置を講じます。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>個人情報へのアクセスを業務上必要な者に限定する</li>
              <li>パスワード管理・二段階認証等によるアクセス制御を実施する</li>
              <li>個人情報を含むデータは暗号化された環境で管理する</li>
              <li>不要になった個人情報は適切な方法で削除・廃棄する</li>
              <li>情報漏えい等が発生した場合は、速やかに対象者への通知および個人情報保護委員会への報告を行う</li>
            </ul>
          </Section>

          <Section title="8. 保有個人データの開示・訂正・削除等">
            <p>ご本人から保有個人データの開示・訂正・追加・削除・利用停止・第三者提供停止のご請求があった場合、本人確認の上、合理的な範囲内で速やかに対応します。なお、開示請求には対応に要する実費を申し受ける場合があります。</p>
            <p style={{ marginTop: 12 }}>ご請求は下記お問い合わせ先までご連絡ください。</p>
          </Section>

          <Section title="9. 個人情報の保存期間">
            <p>収集した個人情報は、利用目的の達成に必要な期間保存します。サービス契約終了後は、法令で定められた期間を除き、不要な個人情報を適切に削除します。</p>
          </Section>

          <Section title="10. プライバシーポリシーの変更">
            <p>当方は、法令の変更やサービス内容の変更に伴い、本ポリシーを改定することがあります。重要な変更がある場合は、ウェブサイト上にてお知らせします。変更後のポリシーは、当ページへの掲載をもって効力を生じるものとします。</p>
          </Section>

          <Section title="11. お問い合わせ先">
            <p>本ポリシーに関するお問い合わせ、個人情報の開示等のご請求は以下までご連絡ください。</p>
            <div style={{ marginTop: 16, padding: "20px 24px", background: "#f4f4f0", borderRadius: 12 }}>
              <p style={{ margin: 0 }}>
                FlowBoost Lab<br />
                担当：Shimoya<br />
                メール：simoyou.pc@gmail.com<br />
                受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）
              </p>
            </div>
          </Section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, color: "var(--fg)" }}>{title}</h2>
      {children}
    </section>
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
