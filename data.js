const DATA = {
  "DevSecOps" : "開発・運用・セキュリティ連携",
  "fintech" : "金融IT",
  "SWエンジニア" : "ソフトウェア・エンジニア",
  "1on1MTG" : "上司と部下が1対1で行うミーティング",
  "ad-tec" : "広告技術",
  "AI-OCR" : "人工知能を用いた光学文字認識",
  "AutoML" : "自動化された機械学習",
  "DevOps" : "開発・運用連携",
  "J-ESOP" : "株式給付信託",
  "MLOps" : "機械学習開発・運用連携",
  "Off-JT" : "職場外訓練",
  "OFFJT" : "職場外訓練",
  "OffJT" : "職場外訓練",
  "offJT" : "職場外訓練",
  "CtoC" : "個人間取引",
  "BtoB" : "企業間取引",
  "BtoC" : "消費者向けビジネス",
  "CSAI" : "クライアント・サイド広告挿入",
  "FCEV" : "燃料電池自動車",
  "GPTW" : "働き甲斐のある会社",
  "IaaS" : "サービスとしてのインフラ",
  "IFRS" : "国際財務報告基準",
  "LPIC" : "Linuxプロフェッショナル認定資格",
  "MVNE" : "仮想移動体通信事業者支援事業者",
  "MVNO" : "仮想移動体通信事業者",
  "PaaS" : "サービスとしてのプラットフォーム",
  "PHEV" : "プラグイン・ハイブリッド自動車",
  "RFID" : "無線周波数を用いた識別",
  "RTOS" : "リアルタイムOS",
  "Saas" : "サービスとしてのソフトウェア",
  "SaaS" : "サービスとしてのソフトウェア",
  "SIer" : "システム運用の請負事業者",
  "SWOT" : "強み・弱み・機会・脅威の4要素",
  "ペアプロ" : "ペア・プログラミング",
  "AGV" : "無人搬送車",
  "API" : "アプリケーション・プログラミング・インターフェース",
  "AWS" : "Amazon Web Service",
  "B2B" : "企業間取引",
  "B2C" : "消費者向けビジネス",
  "BEV" : "バッテリー式電気自動車",
  "CAD" : "コンピュータによって支援された設計",
  "CAE" : "コンピュータによって支援されたエンジニアリング",
  "CBT" : "コンピュータを用いる試験",
  "CEO" : "最高経営責任者",
  "CFO" : "最高財務責任者",
  "CIO" : "最高情報責任者",
  "CLI" : "コマンドライン・インターフェース",
  "CMS" : "コンテンツ管理システム",
  "CRM" : "顧客関係マネジメント",
  "CTO" : "最高技術責任者",
  "CUI" : "コマンド・ユーザ・インターフェース",
  "C2C" : "個人間取引",
  "EDI" : "電子データ交換",
  "ERP" : "企業資源計画",
  "FCV" : "燃料電池自動車",
  "GAS" : "Google Apps Script",
  "GCP" : "Google Cloud Platform",
  "GIS" : "地理情報システム",
  "GUI" : "グラフィカル・ユーザ・インターフェース",
  "HEV" : "ハイブリッド自動車",
  "HRT" : "謙虚／尊敬／信頼",
  "ICT" : "情報通信技術",
  "IDE" : "統合開発環境",
  "IoT" : "モノのインターネット",
  "IPC" : "プロセス間通信",
  "LLM" : "大規模言語モデル",
  "MGR" : "マネージャ",
  "MMO" : "多人数同時参加型オンライン・ゲーム",
  "MNO" : "移動体通信事業者",
  "M&A" : "企業の合併・買収",
  "OCR" : "光学的文字認識",
  "OJT" : "現任訓練",
  "OKR" : "目標と主要な結果",
  "OSS" : "オープンソース・ソフトウェア",
  "PdM" : "プロダクト・マネージャ",
  "PoI" : "興味のある地上のポイント",
  "POS" : "販売時点情報管理",
  "PvE" : "プレイヤー対CPU",
  "PvP" : "プレイヤー対プレイヤー",
  "RAG" : "検索拡張生成",
  "RoR" : "Rust on Rails",
  "RPA" : "ロボットによる業務自動化",
  "R&D" : "研究開発",
  "SDK" : "ソフトウェア開発キット",
  "SEO" : "検索エンジン最適化",
  "SES" : "システム・エンジニア派遣サービス",
  "SPA" : "シングル・ページ・アプリケーション",
  "SRE" : "サイト信頼性エンジニアリング",
  "TCP" : "伝送制御プロトコル",
  "toB" : "企業向け",
  "toC" : "消費者向け",
  "TUI" : "テキスト・ユーザ・インターフェース",
  "UGC" : "ユーザの生成したコンテンツ",
  "AI" : "人工知能",
  "AR" : "拡張現実",
  "DB" : "データべース",
  "DX" : "デジタル変革",
  "EC" : "電子商取引",
  "EV" : "電気自動車",
  "FB" : "フィードバック",
  "FW" : "フレームワーク",
  "GX" : "グリーン・トランスフォーメーション",
  "HD" : "持株会社",
  "HR" : "人的資源",
  "IP" : "知的財産",
  "IT" : "情報技術",
  "JS" : "JavaScript",
  "LT" : "短いプレゼンテーション",
  "ML" : "機械学習",
  "MO" : "少人数同時参加型オンライン・ゲーム",
  "MR" : "複合現実",
  "OA" : "オフィス業務の自動化",
  "PG" : "プログラマ",
  "PL" : "損益計算書",
  "PM" : "プロジェクト・マネージャ",
  "QA" : "品質保証",
  "QC" : "品質管理",
  "SE" : "システム・エンジニア",
  "SI" : "システム運用の請負事業",
  "SP" : "スマートフォン",
  "SR" : "代替現実",
  "UE" : "Unreal Engine",
  "UX" : "ユーザ・エクスペリエンス",
  "VB" : "Visual Basic",
  "VC" : "Visual C++",
  "VR" : "仮想現実"
}
