import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | FlowBoost Lab",
  description: "FlowBoost Labの利用規約です。",
};

export default function TermsPage() {
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
          利用規約
        </h1>
        <p style={{ fontSize: 14, color: "#888", marginBottom: 48 }}>制定日：2026年3月19日</p>

        <div style={{ lineHeight: 1.9, fontSize: 15, color: "#333" }}>
          <p style={{ marginBottom: 32 }}>
            本利用規約（以下「本規約」）は、FlowBoost Lab（個人事業主、以下「当方」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。お客様（以下「ユーザー」）は、本規約に同意の上、本サービスをご利用ください。本サービスは事業者向けサービス（BtoB）であり、事業目的でのご利用を前提とします。
          </p>

          <Section title="第1条（適用）">
            <p>本規約は、ユーザーと当方との間における本サービスの利用に関わる一切の関係に適用されます。当方が別途定めるガイドライン・個別契約書等は、本規約の一部を構成します。本規約と個別契約書が矛盾する場合は、個別契約書が優先します。</p>
          </Section>

          <Section title="第2条（サービスの内容）">
            <p>本サービスは、AIを活用した以下の業務効率化サポートを提供するものです。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>SNS運用の代行・コンテンツ作成支援</li>
              <li>集客・営業用文章の作成支援</li>
              <li>業務効率化システムの構築・運用サポート</li>
              <li>その他、個別に合意した業務</li>
            </ul>
            <p style={{ marginTop: 12 }}>具体的なサービス範囲・納品物・対応頻度は、契約締結時に別途合意した内容に準じます。</p>
          </Section>

          <Section title="第3条（利用申し込みと契約の成立）">
            <p>ユーザーが当方所定の方法により申し込みを行い、当方がこれを承諾した時点で、本規約に基づく契約が成立します。当方は、以下に該当する場合、申し込みを承諾しないことがあります。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>申し込み内容に虚偽・誤りが含まれる場合</li>
              <li>過去に本規約に違反した事実がある場合</li>
              <li>反社会的勢力に該当する、またはその関係者である場合</li>
              <li>その他、当方が不適切と合理的に判断した場合</li>
            </ul>
          </Section>

          <Section title="第4条（料金と支払い）">
            <p>本サービスの利用料金は、当方が提示する料金表または個別合意に従います。料金はすべて税込で表示します。ユーザーは、当方が指定する方法・期日までにお支払いください。</p>
            <p style={{ marginTop: 12 }}>支払いが期日を過ぎた場合、年14.6%の割合による遅延損害金が発生します。支払いの遅延が継続する場合、当方はサービスを一時停止することができます。</p>
            <p style={{ marginTop: 12 }}>月額料金は、当方が30日前以上の事前通知をもって変更することができます。変更に同意しない場合、ユーザーは次回更新前に解約することができます。</p>
          </Section>

          <Section title="第5条（禁止事項）">
            <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>法令または公序良俗に違反する行為</li>
              <li>当方または第三者の知的財産権・プライバシー・名誉・信用を侵害する行為</li>
              <li>他者の著作物・個人情報・営業秘密を無断でAIシステムに入力する行為</li>
              <li>AI生成コンテンツを虚偽表示・詐欺的目的に使用する行為</li>
              <li>本サービスを第三者に転売・再配布・再提供する行為</li>
              <li>本サービスのシステムへの不正アクセス・リバースエンジニアリング</li>
              <li>当方の競合サービスの開発・運営に本サービスを利用する行為</li>
              <li>その他、当方が合理的に不適切と判断する行為</li>
            </ul>
          </Section>

          <Section title="第6条（AI生成コンテンツについて）">
            <p>本サービスを通じて提供されるコンテンツはAIが生成するものであり、以下についてご了承ください。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>AI生成コンテンツの正確性・完全性・適法性を当方は保証しません。公開前にユーザー自身で内容をご確認ください。</li>
              <li>AI生成コンテンツは、既存の著作物と類似する可能性があります。著作権上のリスクについてはユーザーが最終的な責任を負います。</li>
              <li>文化庁のガイドラインに基づき、AIが自律的に生成したコンテンツには著作権が発生しない場合があります。</li>
              <li>医療・法律・金融に関する助言や重要な判断を要する目的への使用は推奨しません。</li>
            </ul>
          </Section>

          <Section title="第7条（知的財産権）">
            <p>本サービスを通じて当方が提供するシステム・ツール・ノウハウ・ドキュメントの知的財産権は当方に帰属します。ユーザーには、契約期間中に限り、本サービスを利用する非独占的なライセンスを付与します。</p>
            <p style={{ marginTop: 12 }}>当方がユーザーに納品したAI生成コンテンツ（文章・投稿文等）の利用権はユーザーに帰属します。ただし、当方は匿名化・統計化した形でサービス改善に活用することがあります。</p>
          </Section>

          <Section title="第8条（秘密保持）">
            <p>ユーザーは、本サービスを通じて知り得た当方の技術情報・ノウハウ・業務情報等（公知の情報を除く）を、第三者に開示・漏洩してはなりません。当方も、ユーザーから提供を受けた業務情報を第三者に開示しません。この義務は、契約終了後も2年間継続します。</p>
          </Section>

          <Section title="第9条（サービスの変更・中断・終了）">
            <p>当方は、以下の場合にサービスを変更・中断・終了することがあります。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>システムメンテナンスまたは緊急対応が必要な場合</li>
              <li>天災・停電・通信障害等の不可抗力による場合</li>
              <li>SNSプラットフォーム・AIサービス等の仕様変更により継続が困難な場合</li>
              <li>その他、当方が合理的に必要と判断した場合</li>
            </ul>
            <p style={{ marginTop: 12 }}>サービスを終了する場合は、原則として1ヶ月前までにユーザーに通知します。緊急時はこの限りではありません。</p>
          </Section>

          <Section title="第10条（免責事項）">
            <p>当方は、以下の事項について責任を負いません。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>AI生成コンテンツの精度・独創性・法的適格性</li>
              <li>SNS・メール等の外部プラットフォームの仕様変更・障害・停止</li>
              <li>ユーザーの操作ミスまたは第三者による不正アクセス</li>
              <li>本サービスの利用により期待する集客・売上効果が得られないこと</li>
              <li>逸失利益・機会損失・間接損害・特別損害</li>
            </ul>
            <p style={{ marginTop: 12 }}>当方の損害賠償責任は、直近12ヶ月分の利用料金を上限とします。</p>
            <p style={{ marginTop: 12 }}>ただし、当方の故意または重大な過失に起因する損害については、上記の免責は適用されません。</p>
          </Section>

          <Section title="第11条（解約）">
            <p>ユーザーは、当方へメールにてご連絡いただくことで、いつでも本サービスを解約することができます。解約は、当方が受理した月の末日をもって効力を生じます。</p>
            <p style={{ marginTop: 12 }}>すでにお支払いいただいた料金の返金は原則行いません。ただし、当方の都合によるサービス終了の場合は、未提供期間分の料金を返金します。</p>
          </Section>

          <Section title="第12条（契約の解除）">
            <p>当方は、ユーザーが以下のいずれかに該当する場合、催告なく契約を解除することができます。</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li>本規約に違反し、相当期間内に是正されない場合</li>
              <li>支払いを2ヶ月以上遅延した場合</li>
              <li>反社会的勢力への該当が判明した場合</li>
              <li>破産・民事再生・差押え等の手続きが開始された場合</li>
              <li>その他、当方との信頼関係を著しく損なう行為があった場合</li>
            </ul>
          </Section>

          <Section title="第13条（規約の変更）">
            <p>当方は、必要に応じて本規約を改定することがあります。重要な変更の場合は、効力発生の30日前までにメールまたはウェブサイト上でお知らせします。変更後も継続してご利用いただいた場合、改定後の規約に同意したものとみなします。</p>
          </Section>

          <Section title="第14条（準拠法・管轄裁判所）">
            <p>本規約の解釈は日本法に準拠します。本サービスに関して紛争が生じた場合、当方の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。</p>
          </Section>

          <div style={{ marginTop: 48, padding: "24px", background: "#f4f4f0", borderRadius: 12 }}>
            <p style={{ margin: 0, fontSize: 14, color: "#666" }}>
              <strong>お問い合わせ先</strong><br />
              FlowBoost Lab　担当：Shimoya<br />
              メール：simoyou.pc@gmail.com<br />
              受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）
            </p>
          </div>
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
