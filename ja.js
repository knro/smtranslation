const ja = {
	general: {
		home: "ホーム",
		next: "次",
		ok: "OK",
		done: "終了",
		cancel: "キャンセル",
		confirm: "確認",
		apply: "申し込み",
		enter: "Enter",
		scan: "Scan",
		save: "保存",
		save_as: "Save as",
		overwrite: "Overwrite",
		select: "選択する",
		hardware: "Hardware",
		signal: "Signal",
		usb: "USB",
		devices: "Devices",
		connect: "接続",
		disconnect: "切断する",
		disconnected: "切断されました",
		schedule: "Schedule",
		yes: "はい",
		no: "いいえ",
		ignore: "Ignore",
		error: "エラー",
		back: "戻る",
		delete: "消去",
		remove: "削除",
		online: "オンライン",
		offline: "オフライン",
		cloud: "クラウド",
		remote: "リモート",
		preset: "プリセット",
		camera: "カメラ",
		focuser: "フォーカサー",
		filter_wheel: "フィルターホイール",
		filter: "フィルター",
		exposure: "露出",
		binning: "ビニング",
		left: "Left",
		top: "Top",
		action: "アクション",
		scope_type: "望遠鏡タイプ",
		solver_type: "ソルバーの種類",
		type: "タイプ",
		driver: "Driver",
		gain: "ゲイン",
		offset: "オフセット",
		format: "フォーマット",
		encode: "エンコード",
		iso: "ISO",
		count: "回数",
		delay: "遅延",
		status: "スターテス",
		target: "目標",
		angle: "角度",
		sep_profile: "SEP プロフィール",
		direction: "方向",
		rotation: "回転",
		automatic: "自動",
		manual: "手動",
		progress: "進行状況",
		position_angle: "位置角度",
		details: "詳細",
		skip: "スキップ",
		updated: "更新済",
		new: "新規",
		remote_support: "リモートサポート",
		logout: "Logout",
		setting: "Setting",
		hours: "Hours",
		minutes: "Minutes",
		seconds: "Seconds",
		introduction: "Introduction",
		examples: "Examples",
		chat: "Chat",
		controls: "Controls",

		azimuth: "方位",
		altitude: "高度",
		tags: "Tags",
		filename: "ファイル名",
		size: "サイズ",
		frame: "フレーム",
		temperature: "温度",
		name: "名前",
		date: "日付",
		resolution: "解像度",
		monitor: "Monitor",
		clear_all: "Clear All",
		pixels: "Pixels",

		select_file: "ファイルを選択",
		select_folder: "フォルダを選択",
		selected_dir: "選択したフォルダ",
		new_folder: "新しいフォルダ名を入力",
		create_new_folder: "新しいフォルダを作成",
		empty_folder: "フォルダは空です",

		train: "トレーン",
		no_data_found: "データなし",
		track: "追尾",
		jobs: "ジョブ",
		category: "カテゴリー",
		profile: "プロファイル",
		arcmin: "arcmin",
		calculate: "計算",
		update: "更新",
		center: "中央",
		learn_more: "詳しくはこちら",

		// ドロップダウンの場合
		select_option: "オプションを選択...",
		search: "検索...",
		no_results: "No results",

		// ボタン/トグル
		on: "オン",
		off: "オフ",
		go: "GO",
		add: "追加",
		load: "Load",
		edit: "編集",
		refresh: "更新",
		reset: "リセット",
		reset_all: "すべてリセット",
		start: "開始",
		stop: "停止",
		stopping: "停止中",
		clear: "クリア",
		solve: "解決",
		parked: "パーク",
		unparked: "アンパーク",
		open: "開く",
		close: "閉じる",
		opened: "開く",
		closed: "閉じる",
		enable: "利用可",
		disable: "利用不可",
		select_time: "Select Time",
		set: "セット",
		logging: "Logging",
		drivers: "Drivers",
		network: "Network",
		submit: "Submit",
		execute: "Execute",
		retry: "Retry",

		// 削除アラートの確認
		alert_confirm_delete_title: "削除の確認",
		alert_delete_profile_body:
			"選択したプロファイルを削除してもよろしいですか?",
		alert_delete_scope_body: "選択したスコープを削除してもよろしいですか?",

		// Confirm
		alert_confirmation_title: "確認",
		alert_confirmation_body:
			"Are you sure you want to create {0} with this name?",
		alert_overwrite_body:
			"The file '{0}' already exists. Do you wish to overwrite it?",

		// エラー メッセージ
		network_error:
			"StellarMate がネットワークに接続されていることを確認してください",
		internet_required: "インターネットに接続していることを確認してください",
		alert_comm_error_title: "通信エラー",
		alert_comm_error_body:
			"StellarMate との通信に失敗しました.ネットワークに接続されていることを確認してください.",
		ekoslive_down_title: "EkosLive がダウンしています",
		ekoslive_down_body:
			"EkosLive が実行されていません。StellarMate を再起動するか,StellarMate サポートに連絡してください。",
		kstars_down_title: "KStars がダウンしています",
		kstars_down_body:
			"KStars が実行されていません。StellarMate を再起動するか,StellarMate サポートに連絡してください。",
		wait_while_syncing: "お待ちください \n を同期中",
		file_too_large: "File is too large",

		// 外部ストレージ
		reset_default: "デフォルトにリセット",
		external_storage: "外部ストレージ",
		success: "Success",
		failed: "Failed",
	},
	darkLibrary: {
		title: "ダーク ライブラリ",
		darks: "ダーク",
		defects: "欠陥",
		prefer: "優先",
		create_darks_title: "ダークを作成",
		create_defects_title: "欠陥マップを作成",
		view_masters_title: "マスターの表示",

		create_darks: {
			Exposure_range: "露出範囲",
			to: "To",
			temp_range: "温度範囲",
			binning_one: "1x1",
			binning_two: "2x2",
			binning_four: "4x4",
			total_images: "合計",
		},

		create_defect_map: {
			master_dark: "マスター ダーク",
			bad_pixels: "不良ピクセル",
			hot_pixels: "ホット ピクセル",
			cold_pixels: "コールド ピクセル",
			generate_map: "マップの生成",
			save_map: "保存済み",
			偏差: "σ",
		},
	},
	achievements: {
		score: "合計スコア",
		badge: "バッジ",
		achievements: "実績",
		unlocked: "実績のロック解除",
		points: "ポイント",
		completed: "完了",
		not_completed: "未完了",
		capture_preview_title: "ファースト ライト!",
		ten_sequences_title: "開始します!",
		mount_goto_title: "魔法の指",
		video_recording_title: "ディレクターズ カット",
		weather_check_title: "クラウド マグネット",
		live_stacking_title: "詳細を見てみましょう",
		create_darks_title: "ダークサイドを受け入れる",
		create_defect_title: "コズミック メイクアップ",
		import_mosaic_title: "モザイク ウィーバー",
		messier_captured_title: "MXXXX (例: M1)",
		all_messier_title: "コズミック マラソン",
		scheduler_title: "ロボティック マスター",
		capture_master_title: "スカイ マスター",
		capture_legend_title: "天空伝説",
		paa_title: "完璧主義者",
		guide_rms_title: "Bullseye!",

		capture_preview_description: "プレビューをキャプチャする",
		ten_sequences_description: "10 カウントでシーケンスをキャプチャする",
		mount_goto__description:
			"新しい画像がキャプチャされたときにオブジェクトを 3 秒間保持してターゲット GOTO を使用する",
		video_recording_description: "ビデオを 1 分間録画する",
		weather_check__description:
			"天気情報でクラウド マップを使用します。天気を確認するには,少なくとも 8 倍にズームインします",
		live_stacking_description:
			"ライブ スタッキング。少なくとも 5 枚の画像を実行します",
		create_darks_description: "合計 50 のダークを作成します画像",
		create_defect_description:
			"80 を超える欠陥マップでホット/コールド ピクセルを生成します",
		import_mosaic_description: "望遠鏡からモザイクをインポートする",
		messier_captured_description: "メシエ天体がキャプチャされました",
		all_messier_description: "すべてのメシエ天体がキャプチャされました",
		scheduler_description:
			"2 時間以上の画像データに相当するスケジューラ ジョブを完了します.",
		capture_master_description: "合計 500 枚の画像をキャプチャする",
		capture_legend_description: "合計 1000 枚の画像をキャプチャする",
		paa_description: "30 秒角未満のボックス エラーで PAA を終了する.",
		guide_rms_description: "0.5 秒角未満の合計 RMS ガイドを達成する.",
		filtered_image_description: "Capture a narrowband image",
		gallery_image_description: "Gallery Image downloaded",

		alert_reset_title: "Reset achievements",
		alert_agree_reset_body: "Are you sure you want to reset all achievements?",
	},
	tourGuide: {
		ツアーガイド: "ツアーガイド",
		前の: "前の",
		finish: "終了",
		title_devices_list: "StellarMate デバイス リスト",
		title_device_actions: "デバイス アクション",
		title_profiles: "プロファイル",
		title_port_selector: "ポート セレクター",
		title_trains: "光学系",
		title_weather_bar: "天気バー",
		title_cloud_report: "Cloud Report",

		title_next: "次は?",
		title_focus: "フォーカス",
		title_align: "位置合わせ",
		title_guide: "ガイド",
		title_capture: "キャプチャ",
		title_mount: "架台",
		title_observatory: "観測所",
		title_scheduler: "スケジューラ",
		title_indi: "INDI コントロール パネル",
		title_quick_controls: "クイック コントロール",
		title_preview: "プレビュー",
		title_framing: "フレーミング",
		title_live_video: "ライブ ビデオ",
		title_stop: "停止",
		title_live_stacking: "ライブ スタック",
		title_quick_settings: "簡易カメラ設定",

		title_targets_info: "ターゲット",
		title_search_bar: "検索バー",
		title_time_controls: "時間コントロール",
		title_target_controls: "ターゲット コントロール",
		title_object_info: "対象情報",
		title_fov: "ターゲット視野",
		title_target_action: "ターゲットアクション",
		title_stella_prompt: "Stella prompt",

		title_focus_initial: "Current Position",
		title_focus_steps: "Target Position",
		title_focus_size: "Step Size",

		description_devices_list:
			"これは,自動的に検出され,手動で追加された StellarMate ユニットのリストです。RESCAN をタップして,ネットワーク上の新しい StellarMate ユニットを検出します。",
		description_device_actions:
			"リストからデバイスを削除するか,出荷時設定へのリセットを実行するか,ログアウトします。",
		description_profiles:
			"Equipment Profiles で天文機器を管理します。プロファイルを開始する前に,すべての機器の電源を入れ,StellarMate に接続する必要があります。プロファイルを開始したら,オプティカル トレインを設定し,Ekos をタップして天体写真セッションを開始します。",
		description_port_selector:
			"プロファイルが初めて開始された後,デバイスのシリアルおよび/またはネットワーク設定を選択します。",
		description_trains:
			"オプティカル トレインを使用して機器の配置方法を設定します。各デバイスを特定の機能に割り当てます。カメラごとにトレインを作成します。",
		description_weather_bar: "簡単な天気予報と現在のサイトのボートル クラス",
		description_cloud_report: "3 時間のクラウド オーバーレイ.",
		description_next:
			"[ターゲット] タブをタップして,該当する天文ターゲットを探索します。[Go & Solve] を使用して,ターゲットをカメラ フレームの中央に配置します。フレーミング アシスタントを開いて,目的の完璧な向きを実現します。[Ekos] タブに移動して,イメージング シーケンスをセットアップし,ライブに移動します画像をスタックします。",

		description_focus: "電動フォーカサーを使用してカメラの焦点を合わせます。",
		description_align:
			"画像をプレートソルビングすることにより、マウントをターゲット上に正確に配置します",
		description_guide:
			"長時間露光を可能にするために,追跡中にマウントをターゲットにロックしたままにしてください。",
		description_capture:
			"構成可能な設定を使用して画像をキャプチャするシーケンスを作成します。フィルター ホイールの設定とダーク ライブラリを管理します。",
		description_mount:
			"追跡,駐車,および子午線フリップの設定。自動パークを構成します。",
		description_observatory: "ドームとダスト キャップ装置を制御します。",
		description_scheduler:
			"ターゲットとシーケンス ファイルを選択して,完全な天体写真セッションを自動化します。Telescopius からモザイクをインポートします。",
		description_indi: "直接低-機器プロパティへのレベル アクセス。",
		description_quick_controls: "マウント,カメラ,回転子コントロール。",
		description_preview: "単一のプレビュー フレームをキャプチャします。",
		description_framing: "停止するまで露出を無期限にループします",
		description_live_video:
			"ライブ ビデオ ストリームを開始し,ビデオをストレージに記録します.",
		description_stop: "進行中の露出または録画を停止します.",
		description_live_stacking:
			"S/N 比を高めるために画像をライブ スタックします。既存のキャプチャ シーケンスが実行されている場合,ライブ スタックは着信画像を使用します。それ以外の場合は,クイック カメラ設定の設定を使用して露出をループします。",
		description_quick_settings:
			"アクティブなトレインを選択し,カメラとフィルターを構成しますホイール設定。",

		description_targets_info:
			"Targets は,観測セッションを合理化するための StellarMate 計画ツールです。何千ものオブジェクトから検索し,単純な基準を使用してそれらをフィルタリングします。Framing Assistant を使用して,ターゲットをフレーミングします。",
		description_search_bar:
			"名前を入力して検索ボタンをタップして,既存のリストでオブジェクトをフィルタリングするか,新しいオブジェクトを検索します。",
		description_time_controls:
			"Ekos がオフラインの場合は,対象の日時の計算を調整します。",
		description_target_controls:
			"確認トワイライト情報,FOV の管理,フィルターの調整,天体の種類の選択。",
		description_object_info: "天体の大きさ,上昇,通過,設定時間。",
		description_fov: "タップしてフレーミング アシスタント モードに入ります。",
		description_target_action:
			"ターゲットをお気に入りまたはカスタム リストに追加します。GOTO のみをコマンドするか,GOTO に続いてキャプチャと解析を実行します。Ekos がオフラインの場合は,ターゲットをスケジュールします。",
		alert_guided_tour_title: "Take a guided tour on Stellarmate App features",

		description_stella_intro:
			"Stella is your personal smart digital assistant. You can use voice or text to communicate with Stella. Ask it about any topic in astronomy.",
		description_stella_example: "View example prompts.",
		description_stella_chat: "View the chat history.",
		description_stella_input:
			"Enter your prompts to request tasks or retrieve data.",
		description_stella_other_function:
			"You can also interact with Stella using voice and attach files.",
		description_align_paa:
			"Polar align your equatorial mount to achieve better tracking & guiding.",
		description_align_load:
			"Load and Plate Solve a FITS image (is FITS only supported? I think we can also send JPG and XISF too",
		description_align_controls:
			"You can view Align Chart, Image, Settings and Quick Access Settings. You can also start Aligning",
		description_align_solution: "Plate solving solution",

		description_focus_initial: "Current focuser position and Focus Advisor",
		description_focus_steps: "Target position",
		description_focus_size: "Steps size when running autofocus",
		description_focus_exposure: "Exposure duration and Framing toggle",
		description_focus_controls:
			"You can view Focus Chart, Image, Settings and Quick Access Settings. You can also start Focusing",

		description_guide_camera: "Capture and Loop",
		description_guide_status: "Guiding Status",
		description_guide_controls:
			"You can view Guide Chart, Image, Settings and Quick Access Settings. You can also start Guiding",
	},
	tooltip: {
		placeholder: "Placeholder %{0} or %{1}",
		placeholder_file: "拡張子のない .esq ファイルの名前。",
		placeholder_date: "ファイルが保存された現在の日時。",
		placeholder_type: "画像データ種 例: 'Light', 'Dark'",
		placeholder_exp: "秒単位の露光時間.",
		placeholder_exposure:
			"The exposure duration in seconds as plain number, without any unit as suffix.",
		placeholder_offset: "The offset configured for capturing.",
		placeholder_gain: "The gain configured for capturing.",
		placeholder_bin: "The binning configured for capturing.",
		placeholder_iso: "The ISO value(DSLRs only).",
		placeholder_pierside: "The current mount's pier side",
		placeholder_temperature: "The camera temperature of capturing.",
		placeholder_filter: "適用フィルター.",
		placeholder_seq:
			"連続画像識別子。* は使用される桁数 (1 ～ 9) です。このタグは必須であり,フォーマットの最後の要素でなければなりません",
		placeholder_target: "ターゲット名.",
		placeholder_arbitrary:
			"Arbitrary text may also be included within the Format string, except the % and / characters. The / Path character can be used to define arbitrary directories.",
		placeholder_notes: "Notes:",
		placeholder_case:
			"• Tags are case sensitive in both their short and long forms",
		placeholder_datetime:
			"• Only use the %Datetime tag in the filename portion of the format, not in the path definition.",
		format_title:
			"フォーマットはプレースホルダー タグを使用して画像ファイル名を定義するために使用されます。",
		suffix: "ファイル名にシーケンス番号を追加するために使用される桁数",
		paa_desc:
			"極軸合わせにプレート解決法を使用します。プレート解決は遅くなりますが,より正確な結果を提供します。",
		plate_solving:
			"プレート ソルビングを使用して,更新プロセス中に修正された位置合わせエラーを追跡します。ユーザーは,以下の更新されたエラー行のエラーを減らし,矢印のサイズを最小限に抑えるようにしてください.",
		mount_info: "星の移動 と計算エラー",
		movestar_desc:
			"星の移動,ただしEkos は移動中の星を追跡しようとし,可能な場合は現在のアライメント エラーを推定します。",
		remote_description:
			"Add remote INDI drivers to chain with the local INDI server configured by this profile. Format this field as a comma-separated list of quoted driver name, host name/address and optional port:",
		remote_zwo_description:
			"Connect to the named camera on 192.168.1.50, port 8000.",
		remote_eqmod_description:
			"Connect to the named mount on 192.168.1.50, port 7624.",
		remote_port: "Connect to all drivers found on 192.168.1.50, port 8000.",
		remote_ip: "Connect to all drivers found on 192.168.1.50, port 7624.",
		remote_info:
			"When omitted, host defaults to localhost and port defaults to 7624. Remote INDI drivers must be already running for the connection to succeed.",
	},
	splash: {
		checking_for_updates: "更新チェック中...",
		download_package: "更新データをダウンロード中...",
		installing_update: "更新データをインストール中...",
		channel_update: "チャンネル切り替え中...",
		upto_date: "すでに最新の状態です。",
		update_installed: "すべての更新プログラムがインストールされています。",
		loading: "読み込み中...",
	},
	validations: {
		username_required: "ユーザー名は必須です",
		username_tooshort: "最低3文字必要です",
		username_toolong: "64 文字を超えることはできません",
		username_invalid: "ユーザー名に無効な文字があります",
		password_required: "パスワードが必要です",
		password_invalid: "最低 6 文字が必要です",
		confirm_password_required: "パスワードの確認が必要です",
		confirm_password_mismatch: "パスワードの確認が正しくありません",
		email_required: "メールが必要です",
		email_invalid: "メールアドレスが無効です",
		license_required: "ライセンスキーが必要です",
		serial_required: "シリアルキーが必要です",
		new_scope_vendor: "有効なベンダー名を入力してください",
		new_scope_model_invalid: "有効なモデルを入力してください",
		new_scope_aperture_invalid: "有効な絞りを入力してください",
		new_scope_focal_length_invalid: "有効な焦点距離を入力してください",
		new_scope_focal_ratio_invalid: "有効な焦点比を入力してください",
		enter_file_name: "ファイル名を入力してください",
	},
	progress: {
		start_capture: "Starting capture...",
		please_wait: "お待ちください...",
		Establishing_connection: "接続を確立しています",
		camera: "カメラを取得しています",
		mounts: "架台を取得しています",
		scopes: "望遠鏡を取得しています",
		filter_wheels: "フィルター ホイールを取得しています",

		//デバイス接続
		registering: "登録中...",
		registered: "登録済み",
		authenticating: "認証中...",
		authenticated: "認証済み",
		checking_kstars: "KStars をチェック中...",
		kstars_open: "KStars オープン",
		checking_ekoslive: "EkosLive をチェック中...",
		ekoslive_connected: "EkosLive 接続済み",
		starting_ekos: "Ekos を開始中...",
		Getting_devices: "デバイスを取得中...",
		loading_settings: "設定を読み込み中...",
		register_device: "スキャンされた QR コード, デバイスを登録中: ",
	},
	welcome: {
		register_new_device: "新しいデバイスを登録しますか?",
		have_existing_account: "アカウントをお持ちですか?",
		require_sm_plus_pro: "お持ちの場合は登録してください",
	},
	device_scanner: {
		scanning:
			"ネットワーク上で StellarMate デバイスを探している間お待ちください",
		qr_scan: "デバイスの QR コードをスキャンしてください",
	},
	statuses: {
		Idle: " Idle",
		prep: "Prep",
		run: "Run",
		Aborted: "aborted",
		"Calibration error": "Calibration error",
		Capturing: "Capturing",
		Streaming: "Streaming",
		"In Progress": "進行中",
		"Setting Temperature": "設定温度",
		Slewing: "旋回",
		Calibrating: "キャプチャ",
		Tracking: "追跡",
		Guiding: "ガイド",
		Parking: "パーキング",
		Loading: "読み込み中",

		"User Input": "ユーザー入力",
		Complete: "完了",
		Suspended: "一時停止",
		Parked: "駐車中",
	},
	connect: {
		register_welcome:
			"デバイスを同期するには,stellarmate.com アカウントにサインインしてください。",
		welcome_heading: "ようこそ",
		welcome_description:
			"StellarMate の HotSpot に接続しているか,StellarMate が同じネットワーク上にあることを確認してください。ありのままのネットワーク。",
		welcome_rescan:
			"RESCANをクリックして,ネットワークのStellarMateデバイスのスキャンを開始します.",
		device_unreachable:
			"デバイスに到達できません!電源とネットワークの設定を確認してください。",
		login_mismatch:
			"認証に失敗しました。アプリのパスワードがオンラインの stellarmate.com のパスワードと異なります。正しいオンライン パスワードでアプリを再登録してください。",
		register_using_key: "Register Device using Serial number",
		old_stellarmate_heading: "更新が必要です!",
		old_stellarmate_description:
			"古いバージョンの StellarMate OS を使用しているようです。このアプリを引き続き使用するには,StellarMate の最新バージョンにアップグレードする必要があります。",
		sm_app_update_title: "SMアプリのアップデート必須！",
		sm_app_update_body:
			"古いバージョンの StellarMate アプリを使用しているようです。アプリを最新バージョンに更新してください。",
		primary: "主要な",
		guide: "ガイド",
		scope: "スコープ",
		btn_rescan: "再スキャン",
		btn_port_select: "ポートセレクター",
		btn_sync_gps: "GPS同期",
		btn_dslr_setup: "DSLR セットアップ",
		btn_clear_driver_config: "ドライバ構成のクリア",
		scan_in_progress: "スキャン中 ...",
		connection_in_progress: "StellarMate を接続中...",
		registration_in_progress: "StellarMate を登録中...",
		logging_in_progress: " StellarMate へのログ記録中...",
		connecting: "接続中...",
		logging: "記録中...",
		generic: "Generic Serial",
		select_driver: "デバイス タイプとドライバを選択してください",
		invalid_ip: "No IP address found or invalid IP {0}. Please try again.",

		cloudsMap: {
			btn_clouds_map: "Clouds Map",
			attribution: "OpenStreetMap",
			map_title: "3-Hour Cloud Map",
			bortle_class: "Bortle Class",
		},

		ip_address: "IP アドレス",
		login_register: {
			heading: "認証",
			見出し_オンライン: "stellarmate.com にサインインしてください",
			connect_to_internet: "インターネットに接続する必要があります。",
			connect_to_sync: "これは、アカウントを同期するために一度だけ行われます",

			setup_guide: "セットアップガイド",
			register: "登録",
			login: "ログイン",

			serial: "シリアル #",
			license: "ライセンス キー",
			username: "ユーザー名",
			password: "パスワード",
			confirm_password: "パスワード確認",
			first_name: "名",
			last_name: "姓",
			email: "メール",
			manually: "Manually",
		},
		device_manager: {
			alert_confirm_remove_title: "削除の確認",
			alert_confirm_remove_body: "このデバイスを削除してもよろしいですか?",
			btn_sign_out: "サインアウト",
		},
		profile_manager: {
			heading: "機器プロファイル",
		},

		port_selector: {
			connect_all: "すべて接続",
		},

		manual_add_device: {
			heading: "手動でデバイスを追加",
			btn_add_device: "デバイスを追加",

			alert_unreachable_title: "エラーが発生しました",
			alert_unreachable_body:
				"デバイスの検索中にエラーが発生しました指定された IP アドレスにあります。IP アドレスを再確認して,やり直してください。」",
		},
		device_scanner: {
			no_device_before_scan:
				"デバイスが検出されませんでした.スキャナを実行してください.",
			no_device_after_scan:
				"スキャンが完了しました.デバイスが見つかりませんでした.",
			auto_scanned: "自動スキャンされました",
			manual_added: "手動で追加",
			add_a_device: "デバイスを追加",
			devices_detected: "検出",
			no_network_found:
				"ネットワークが検出されませんでした.ネットワークに接続していることを確認してください.",
		},
		add_profile: {
			add_profile: "プロファイルの追加",
			edit_profile: "プロファイルの編集",
			mount: "マウント",
			ccd: "カメラ 1",
			dome: "ドーム",
			focuser: "フォーカサー",
			filter: "フィルター",
			guider: "カメラ 2",
			ao: "アダプティブオプティクス",
			weather: "天気",
			aux1: "Aux1",
			aux2: "Aux2",
			aux3: "Aux3",
			aux4: "Aux4",
			indi_server: "INDI Server",
			local: "Local",
			host: "Host",
			web_manager: "INDI Web Manager",
			profile_settings: "Profile Settings",
			auto_connect: "Auto Connect",
			port_selector: "Port Selector",
			usb_reset: "Force USB Reset",
			remote_drivers: "Remote Drivers",
		},
		add_scope: {
			add_scope: "望遠鏡を追加",
			edit_scope: "望遠鏡を編集",
			vendor: "ベンダー",
			aperture: "絞り",
			focus_length: "焦点距離",
		},
		auto_detect: {
			alert_auto_detect_title: "Auto Detect Instructions",
			alert_auto_detect_body:
				"StellarMate からすべての機器のプラグを抜き,[OK] を押します。次に,それらを 1 つずつ接続して,デバイス タイプとドライバーを検出します。各デバイスを接続したら,ドライバーを確認する必要があります.",
			alert_mapped_body: "デバイスのシリアル ポートが正常にマップされました。",
			alert_missing_driver_title: "ドライバーがありません",
			alert_missing_driver_body: "最初にドライバーを選択する必要があります.",
		},
		dslr_setup: {
			width: "幅",
			height: "高さ",
			pixel_width: "ピクセル幅",
			pixel_height: "ピクセル高さ",
		},
	},
	targets: {
		now: "今",
		night: "夜",
		rise: "上昇",
		moon: "月",
		sun: "太陽",
		search: "検索",
		cam_width: "カメラの幅",
		cam_height: "カメラの高さ",
		fov_warning: "FOV is too small or large, Please check!",
		phases: {
			new_moon: "新月",
			full_moon: "満月",
			first_quarter: "半月(上弦)",
			third_quarter: "半月(下弦)",
			waxing_crescent: "上弦の三日月",
			Waxing_gibbous: "上弦の月",
			waning_crescent: "上弦の三日月",
			waning_gibbous: "下弦の月",
		},
		lists: "リスト",
		framing_assistant: "フレーミング アシスタント",
		target_rotation: "目標位置角度",
		current_rotation: "現在の角度",
		rotate_capture: "回転 & 撮影",
		goto_rotate: "導入 & 回転",
		angular_offset: "Angular Offset",
		no_objects_in_list:
			"オブジェクトが見つかりません。フィルターを調整またはリセットしてください。",
		go_and_solve: "導入 & Solve",
		fov_profile: " FOV プロファイル",
		fov_width: "FOV 幅",
		fov_height: "FOV 高さ",
		alert_select_FOV_body:
			"Please create or select an FOV profile in order to use Framing assistant.",
		alert_list_exists_body: "A list with that name already exists",
	},
	ekos: {
		heading: "Ekos",
		tgl_mount: "架台",
		tgl_solution_bar: "ソリューション バー",
		tgl_sequence: "シーケンス",
		tgl_properties: "プロパティ",

		alert_ekos_offline_title: "Ekos はオフラインです",
		alert_ekos_offline_body:
			"Ekos は現在オフラインのようです。機器プロファイルを開始しましたか?",

		alert_ekos_disconnected_title: "デバイスが切断されました",
		alert_ekos_disconnected_body:
			"すべての機器プロファイル デバイスが接続されていません。すべてのデバイスを接続してから,もう一度試してください.",

		ekos_dialog: {
			auto_closes_in: "Auto closes in",
		},

		indi: {
			no_logs: "No logs are available for this driver",
		},

		controls_bar: {
			mount_speed: "架台 速度",
			centering: "センタリング",
			find: "Find",
			max: "最大",
			parking_position: "Parking Position is set successfully.",
		},

		collapse_align: {
			heading: "整列",
			action_sync: "同期",
			action_slew: "目標へ移動",
			action_nothing: "Nothing",
			solver_backend: "Backend",
			control: "Control",
			solve: "撮影 & Solve",
			load: "読込 & 移動",
			polar: "極軸合わせ",
			accuracy: "精度",
			settle: "Settle",
			dark: "ダーク",
			arcsec: "秒",
			ms: "ms",
			x_axis: "Iterations",
			y_axis: "エラー (秒)",
			refresh_rate: "リフレッシュレート",
			image_selected: "Image selected successfully",
			select_method: "Please select the image selection method",
			device_gallery: "Phone/Tablet gallery",
			sm_storage: "SM Storage",
			request_storage_permission: "Please allow the storage permission",
			celestial_warning:
				"Plate solving does not work very close to the celestial pole.",

			manualRotator: {
				heading: "手動ローテーター",
				current_pa: "現在の PA",
				target_pa: "ターゲット PA",
				another_image: "別の画像を取得",
			},
			align_settings: {
				rotator_control: "回転 制御",
				use_scale: "Use Scale",
				use_position: "Use Position",
			},
			calibration_settings: {
				pulse: "パルス",
				max_move: "最大移動",
				iterations: "Iterations",
				two_axis: "2 軸",
				square_size: "自動正方形サイズ",
				calibrationBacklast:
					"ガイド キャリブレーションでの DEC バックラッシュの除去",
				reset_calibration:
					"各マウントスルー後にガイドキャリブレーションをリセット",
				reuse_calibration:
					"可能な場合はガイドのキャリブレーションを保存して再利用する",
				reverse_calibration:
					"キャリブレーションを再利用する場合,桟橋側の変更で DEC を逆にする",
				skyflats: "Sky flats",
			},
		},
		collapse_camera: {
			heading: "キャプチャ",
			type_light: "ライト",
			type_bias: "バイアス",
			type_flat: "フラット",
			type_dark: "ダーク",
			format_fits: "FITS",
			format_native: "ネイティブ",
			cooling_unavailable: "N/A",
			btn_add_to_sequence: "シーケンスに追加",
			btn_loop: "ループ",

			rotator_control: {
				title: "Rotator",
				angle: "Rotator Angle",
				offset: "Camera Offset",
				pierside: "Camera Pierside",
				flip: "Flip Policy",
				pos_angle: "Camera Position Angle",
				reverse_direction: "Reverse direction of Rotator",
				flip_rotator: "Preserve Rotator Angel",
				flip_position: "Preserve Position Angel",
			},

			capture_settings: {
				miscellaneous: "Miscellaneous",
				temperature: "Temperature threshold",
				temperature_tooltip:
					"Maximum acceptable difference between requested and measured temperature set point. When the temperature threshold is below this value, the temperature set point request is deemed successful.",
				guiding: "Guiding settle",
				guiding_tooltip:
					"Wait this many seconds after guiding is resumed to stabilize the guiding performance before capture.",
				dialog: "Dialog timeout",
				dialog_tooltip: "Cover or uncover telescope dialog timeout in seconds.",

				reset_sequence: "Always reset sequence when starting",
				reset_sequence_tooltip:
					"When starting to process a sequence list, reset all capture counts to zero. Scheduler overrides this option when Remember job progress is enabled.",
				reset_mount: "Reset mount model after meridian flip",
				reset_mount_tooltip: "Reset mount model after meridian flip.",
				use_flip: "Use flip command if supported by mount",
				use_flip_tooltip: "Use flip command if it is supported by the mount.",
				summary_preview: "Summary screen preivew",
				summary_preview_tooltip:
					"Display received FITS in the Summary screen preview window.",

				force_dslr: "Force DSLR presets",
				image_viewer: "DSLR image viewer",

				sequence_focus: "In-Sequence Focus",
				hfr_threshold: "HFR threshold modifier",
				hfr_threshold_tooltip:
					"Set HFR Threshold percentage gain. When an autofocus operation is completed, the autofocus HFR value is increased by this threshold percentage value and stored within the capture module. If In- Sequence-Focus is engaged, the autofocus module only performs auto-focusing procedure if current HFR value exceeds the capture module HFR threshold. Increase value to permit more relaxed changes in HFR values without requiring a full autofocus run.",
				sequence_check: "In-sequence HFR check",
				sequence_check_tooltip:
					"Run In-Sequence HFR check after this many frames.",

				median: "Use median focus",
				median_tooltip:
					"Calculate median focus value after each autofocus operation is complete. If the autofocus results become progressively worse with time, the median value shall reflect this trend and prevent unnecessary autofocus operations when the seeing conditions deteriorate.",
				save_sequence: "Save sequence HFR value to file",
				save_sequence_tooltip:
					"In-sequence HFR threshold value controls when the autofocus process is started. If the measured HFR value exceeds the HFR threshold, autofocus process is initiated. If the HFR threshold value is zero initially (default), then the autofocus process best HFR value is used to set the new HFR threshold, after applying the HFR threshold modifier percentage. This new HFR threshold is then used for subsequent In-Sequence focus checks. If this option is enabled, the HFR threshold value is constant and gets saved to the sequence file.",
			},
		},
		capture_presets: {
			heading: "プリセット設定",
		},
		capture_limits: {
			heading: "制限設定",
			guide_deviation: "ガイド偏差 <",
			guide_deviation_unit: '"',
			focus_hfr: "HFR の場合オートフォーカス >",
			focus_hfr_unit: "ピクセル",
			focus_deltaT: "Autofocus if ΔT° >",
			focus_deltaT_unit: "°C",
			refocus_n: "Refocus every",
			refocus_n_unit: "minutes",
			refocus_on_hfr: "Refocus on HFR. Use",
			refocus_meridian: "Refocus after meridian flip",
			check_every: "Check every",
		},
		capture_filters: {
			heading: "フィルタ設定",
			auto_focus: "オートフォーカス",
			lock_filter: "フィルター固定",
			no_filters: "No filters have been found.",
		},
		targets_filters: {
			object_type: "オブジェクト タイプ",
			alt: "Alt",
		},
		capture_auto_calibration: {
			heading: "自動校正",
			flat_source: "フラット ソース",
			flat_duration: "フラット デュレーション",
			Dust_builtin: "フラット用内蔵ダスト カバー",
			dust_external: "フラット用外部ダスト カバー",
			wall: "Wall",
			az: "Az",
			adu: "ADU",
			tolerance: "Tolerance",
			park_mount: "架台をパーク",
			park_dome: "ドームをパーク",
			pre_actions: "Calibration Pre-Actions",
		},
		capture_file: {
			filename: "ファイル名",
			heading: "ファイル設定",
			prefix: "プレフィックス",
			script: "脚本",
			directory: "ディレクトリ",
			ts: "ts",
			duration: "間隔",
			suffix: "サフィックス",
			usb: "USB アンマウントに成功しました",
			unmount: "アンマウント",
		},

		collapse_dome: {
			heading: "キャップ & ドーム",
			cap: "キャップ",
			dome: "ドーム",
			shutter: "シャッター",
			dome_slaving: "ドーム追随",
			params: "パラメータ",
			measurements: "測定値",
			autosync_threshold: "自動同期しきい値 (度)",
			radius: "半径 (m)",
			shutter_width: "スリット幅 (m)",
			n_displacement: "N 変位 (m)",
			e_displacement: "E 変位 (m)",
			up_displacement: "上変位 (m)",
			ota_offset: "OTA オフセット (m)",
		},
		collapse_focus: {
			heading: "フォーカス",
			hfr: "HFR",
			hfr_plot: "HFR プロット",
			focus_in: "イン",
			focus_out: "アウト",
			steps: "ステップ",
			advisor: "Focus Advisor",
			update_parameters:
				"Optimize the Focus parameters depending on your current camera and telescope.",
			find_stars:
				"Check to have Focus Advisor search for stars. If you are close enough to Focus to see stars in the Focus frame then this step is not neccessary.",
			coarse_adjustment:
				"Check to have Focus Advisor find coarse focus. This will find an approximate focus position good enough to run Autofocus.",
			fine_adjustment:
				"Check to have Focus Advisor run Autofocus to make fine adjustments to focus parameters.",
			settings: {
				suspend_guiding: "Suspend Guiding",
				auto_select_star: "Auto Select Star",
				subframe: "Sub Frame",
				fullfield: "Full Field",
				dark: "Dark Frame",
				annulus: "Annulus",
				mask: "Mask",
				stars: "Use all stars for focusing",
				ring: "Ring Mask",
				adaptive: "Adaptive",
				min_move: "Min. Move",
				start: "Adap Start Pos",
				max_move: "Max Total Move",
			},
			process: {
				title: "プロセス",
				detection: "検出",
				algorithm: "アルゴリズム",
				threshold: "しきい値",
				effect: "効果",
				average_over: "平均以上",
				kernel_size: "カーネル サイズ",
				num_of_rows: "行数",
				sigma: "シグマ",
				curve_fit: "Curve Fit",
				limit: "Limit",
				average_hfr: "Average HFR Check",
				donut_buster: "Donut Buster",
				scan_pos: "Scan for Start Position",
				datapoints: "Num datapoints",
				initial_size: "Initial Step Size x",
				use_weights: "Use Weights",
				refine_curve: "Refine Curve Fit",
				time_dilation: "Time Dilation x",
				outlier_rejection: "Outlier Rejection",
			},
			donut_buster: {
				title: "Donut Buster",
				always_on: "Always on",
			},
			mechanics: {
				title: "力学",
				initial_step_size: "初期ステップ サイズ",
				max_travel: "最大移動量",
				max_step_size: "最大ステップ サイズ",
				backlash: "バックラッシュ",
				out_step_multiple: "アウト ステップ倍数",
				number_steps: "Number Steps",
				af_overscan: "AF Overscan",
				capture_timeout: "Capture timeout",
				motion_timeout: "Motion timeout",
				overscan_delay: "Overscan Delay",
			},
		},
		collapse_guide: {
			total_rms_plot: "RMS",
			scope_primary: "主鏡",
			guideRate: "ガイド率",
			guider: "ガイダー",
			via: "経由",
			box: "箱",
			effects: "効果",
			dither: "ディザ",
			frequency: "周波数",
			every: "毎",
			frames: "フレーム",
			gpg: "GPG",
			directions: "方向",
			dec: "DEC",
			swap: "スワップ",
			east: "+",
			west: "-",
			north: "+",
			south: "-",
			subframe: "サブフレーム",
			autostar: "オートスター",
			aggressiveness: "アグレッシブネス",
			rarms: 'RA RMS"',
			derms: 'DE RMS"',
			totalrms: '合計 RMS"',
			advanced: "高度な",
			clear_model: "キャリブレーション モデルのクリア",
			yAxis: "ドリフト (秒角)",

			min_error: "Min error",
			max_response: "Max response",
		},
		collapse_observatory: {
			heading: "天文台",
		},
		collapse_polar: {
			heading: "極軸合わせ",
			mount_direction: "架台方向",
			manual_slew: "手動移動",
			west: "西",
			East: "東",
			mount_rotation: "架台回転",
			refresh: "Refresh",
			fov_error: "Disabled: FOV must be 30 arcmins or wide.",
			polar_error: "極エラー: ",
			// エラー: "エラー: " ,
			az_error: "AZ エラー: ",
			al_error: "AL エラー: ",
		},
		collapse_sequence: {
			progress: "シーケンスの開始と停止",
			sequence: "順序",
			Overall_progress: "全体的な進捗状況",
			Sequences: "シーケンス",
			no_sequences:
				"シーケンスなし。 [シーケンスに追加] をタップして追加できます。",
			alert_sequence_error_body: "Error saving sequence file",
			alert_sequence_loading_body: "Error loading sequence file",
			alert_sequence_delete_body: "Error deleting sequence file",
		},
		collapse_mount: {
			meridian_flip: "子午線反転",
			flip_if_ha: "HA > の場合フリップ",
			flip_if_ha_unit: "°",
			pierside: "ピラー側",
			auto_park: "自動パーク",
			auto_park_everyday: "毎日",
			reset_options: "オプションのリセット",
			min_alt: "最低 高度",
			max_alt: "最高 高度",
			enable_alt_limits: "Alt 制限を有効にする",
			enable_ha_limits: "HA 制限を有効にする",
			max_ha: "最大 HA (時間)",
			clear_model: "Clear Model",
			east: "E",
			west: "W",
			east_long: "East (西向き)",
			west_long: "West (東向き)",
			reverse_NS: "Reverse North/South",
			reverse_WE: "Reverse West/East",
			time_source: "Time source",
			location_source: "Location source",
		},
		modal_add_to_seq: {
			heading: "シーケンスに追加",
		},
		modal_goto_sync: {
			heading: "移動または同期",
			category: "カテゴリ",
			btn_goto: "Goto",
		},
		mount_status_bar: {
			ra: "RA",
			de: "DE",
			az: "AZ",
			at: "AL",
			ha: "HA",
		},
		camera_status_bar: {
			bin: "ビン",
		},
		solution_bar: {
			dra: "dRA",
			dde: "dDE",
			arcsec: '"',
			pix: "PIX",
			rot: "ROT",
			fov: "FOV",
		},
		mount_overlay: {
			right_asc: "赤経",
			declination: "赤緯",
		},
		histogram: {
			mean: "平均",
			median: "中央値",
			minimum: "Min",
			maximum: "Max",
			bit_depth: "ビット深度",
			non_linear_histogram: "非線形ヒストグラム",
		},
		livestacking: {
			auto_dark: "オートダーク",
			plate_solve: "プレートソルブ",
			background: "背景",
			saturation: "飽和",
			contrast: "コントラスト",
			sigma_clipping: "シグマ クリッピング",
			noImages: "ライブ スタッキング イメージが見つかりません",
		},
		scheduler: {
			scheduler: "スケジューラ",
			j2000: "J2000",
			add_sequences: "Add Sequences",
			fits: "FITSファイル",
			priority: "優先順位",
			generalSettings: "一般設定",
			startupConditions: "ジョブの開始",
			JobConstraints: "ジョブの制約",
			completionConditions: "ジョブの完了",
			observatoryStartup: "観測所の開始",
			abortedJobManagement: "中止されたジョブ",
			observatoryShutdown: "天文台閉鎖",
			alt: "代替 >",
			moon: "月 >",
			twilight: "トワイライト",
			artifHorizon: "人工地平線",
			sequenceCompletion: "シーケンス補完",
			repeatFor: "繰り返し",
			repeatUntilTerminated: "終了するまで繰り返す",
			repeatUntil: "まで繰り返す",
			unparkDome: "ドームをアンパーク",
			unparkMount: "マウントのパーク解除",
			uncap: "アンキャップ",
			warmCCD: "ウォームCCD",
			none: "なし",
			queue: "列",
			immediate: "すぐに",
			rescheduleErrors: "エラーの再スケジュール",
			no_jobs: "ジョブがキューにありません",
			err_loading_folders: "フォルダの読み込みエラー",
			err_loading_fits: ".fits ファイルの読み込みエラー",
			err_delete_file: "ファイル削除エラー",
			add_job: "ジョブの追加",
			start_jobs: "ジョブの開始と停止",
			culimination: "集大成オフセット",
			create_jobs: "ジョブの作成",

			mosaic: {
				import: "モザイクのインポート",
				planner: "モザイクプランナー",
			},

			scheduler_settings: {
				lead_time: "Lead time",
				lead_time_tooltip:
					"The minimum time in minutes between jobs. The scheduler starts execution of a job before its scheduled startup time by this lead time. Early execution is useful as focusing, alignment, and guiding procedures may take prolonged periods to time to complete.",
				pre_dawn: "Pre-dawn",
				pre_dawn_tooltip:
					"Do not permit jobs to be scheduled or executed past this many minutes before dawn.",
				pre_emptive: "Pre-emptive shutdown",
				pre_emptive_tooltip:
					"In case no scheduler job is scheduled for this many hours, perform a complete shutdown procedure and restart observatory operations once the next job is ready.",
				setting_altitude: "Setting altitude cutoff",
				setting_altitude_tooltip:
					"Do not permit jobs to be scheduled less than this many degrees before the altitude restriction. Actual execution proceeds until the altitude limit.",
				dust_offset: "Dust offset",
				dust_offset_tooltip:
					"Offset astronomical dusk by this many hours. This positive or negative value adjusts the twilight restriction.",
				dawn_offset: "Dawn offset",
				dawn_offset_tooltip:
					"Offset astronomical dawn by this many hours. This positive or negative value adjusts the twilight restriction.",

				stop_ekos: "Stop Ekos after shutdown",
				stop_ekos_tooltip:
					"After shutdown procedure is successfully executed, stop INDI and Ekos.",
				shutdown_script: "Shutdown script terminates INDI",
				shutdown_script_tooltip:
					"If the shutdown script terminates INDI server, enable this option so that no disconnection errors are generated.",
				remember_job: "Remember Job progress",
				remember_job_tooltip:
					"When processing a scheduled job, resume the sequence starting from the last image present in storage.",

				reset_mount: "Reset mount model on alignment failure",
				reset_mount_tooltip: "Reset mount model on alignment failure",
				reset_mount_before: "Reset mount model before starting each job",
				reset_mount_before_tooltip:
					"Reset mount model before starting each job",
				force_realign: "Force re-alignment before re-starting jobs",
				force_realign_tooltip:
					"If Align is enabled, scheduler would initiate a realignment procedure before restarting any jobs even if guiding is active.",
				restart_align: "Restart alignment on guiding calibration failure",
				restart_align_tooltip:
					"If guiding calibration fails then restart alignment process before proceeding to guiding recalibration process again. This can help recenter the target object in the field of view if the calibration process strayed too far off.",

				offsets: "Offsets",
				clean_jobs: "Cleanup and Jobs",
				alignment: "Alignment",

				verify_image: "Verify captured image position every",
				verify_image_tooltip:
					"When calculating position after captures, compute it every Nth capture. Set to 0 to disable.",
				reset_pipeline: "Reset pipeline if verified image delta exceeds",
				reset_pipeline_tooltip:
					"If captured position exceeds target position by more this many arcminutes, abort capture and reschedule the pipeline.",
				arcminutes: "arcminutes",
			},
		},
		summary: {
			empty: "要約データがありません",
			deviation: "偏差",
			inactive: "非アクティブ",
		},
	},
	optical_train: {
		optical_trains: "オプティカルトレイン",
		telescope: "望遠鏡・レンズ",
		create_new: "新規作成",
		dslr_lens: "DSLR レンズ",
		reset_train: "Reset Train",
		focus_ratio: "焦点比",
		guide_via: "Guide Via",
		tooltip: {
			title: "ガイド補正パルスを受信するデバイスを選択してください",
			subject: "これは次のいずれかのデバイスです:",
			mount_device:
				"マウントがガイド補正パルスを受信できる場合,その場合は,パルスがマウントに直接送信されるように選択するのが最適です。これが推奨されるオプションです。",
			st4_device:
				"ガイド カメラとマウントの間に ST4 ケーブルを使用する場合は,ガイド カメラをマウントとして選択する必要があります。 Guider.",
			dedicated_device:
				"専用のガイダー インターフェイス デバイス (Shoestring GPUSB など) を使用している場合は,それを Guider として選択します",
			dedicated: "Dedicated",
			filterWheel:
				"フィルター ホイールを選択します。これは,USB 経由で StellarMate に接続されたスタンドアロンのフィルター ホイールである必要があります。カメラに埋め込まれたフィルター ホイールがある場合は,このフィールドを空のままにしてください。",
		},
	},
	status: {
		system: "System",
		info: "Info",
		software: "Software",

		cpu: "CPU",
		ram: "RAM",
		storage: "STORAGE",
		temperature: "TEMPERATURE",

		stable: "安定",
		beta: "ベータ",

		wifi_network: "Wifi ネットワーク IP",
		ethernet_network: "イーサネット IP",
		model: "モデル",
		hostname: "ホスト名",
		time: "時間",
		release_type: "リリース タイプ",
		updates: "アップデート",

		hotspotMode: "ホットスポット モード",
		wifiNetwork: "Wifi ネットワーク",
		wifiCountry: "WiFi Country",

		wifiBand: "WiFi バンド",

		update_available: "新規利用可能な更新",

		btn_vnc: "デスクトップ (VNC)",
		btn_web_manager: "Web マネージャー",
		btn_restart: "再起動",
		btn_shutdown: "シャットダウン",
		btn_manage_wifi: "WiFi の管理",
		btn_enable_direct_ethernet: "ダイレクト イーサネットを有効にする",
		btn_disable_direct_ethernet: "ダイレクトイーサネットを無効にする",
		btn_enable_hotspot: "ホットスポットを有効にする",
		btn_disable_hotspot: "ホットスポットを無効にする",
		btn_change_hostname: "ホスト名を変更する",
		btn_check_for_updates: "更新を確認する",
		btn_update_now: "今すぐ更新する",
		btn_update_in_progress: "更新中...",
		btn_factory_reset: "出荷時設定にリセットする",
		btn_change_resolution: "解像度を変更する",
		btn_later: "後で",
		btn_resize_fs: "SD のサイズを変更",
		btn_continue: "続行",
		information_ekos_offline:
			"Ekos はオフラインです。機器プロファイルを直接またはスケジューラ経由で開始してください。",
		no_camera_detected: "カメラが検出されないか,カメラがオフラインです",

		alert_device_offline_body:
			"デバイスは現在オフラインのようです。デバイスにログインしましたか?",

		alert_restart_title: "ステラメイトの再起動",
		alert_restart_body:
			"デバイスを再起動します.再起動したら,再接続を試すことができます.",
		alert_shutdown_title: "StellarMate をシャットダウンしています",
		alert_shutdown_body:
			"デバイスの電源がオフになります.再利用するには,手動で電源をオンにする必要があります.",
		alert_resize_title: "microSD カードのサイズ変更",
		alert_resize_body:
			" StellarMateはSDカードのフルサイズに拡張されます.サイズ変更後にStellarMateを再起動してください.",
		alert_resize_btn_resize: "サイズ変更",

		alert_hotspot_enable_title: "ホットスポットを有効にしています",
		alert_hotspot_enable_body:
			"ホットスポットを有効にすると,stellarmate は現在参加している Wi-Fi ネットワークから切断され,独自のホットスポットを開始します。StellarMate を引き続き使用するには,デバイスから同じホットスポット ネットワークに接続する必要があります。続行するには?",

		alert_hotspot_post_enable_title: "ホットスポットに接続してください",
		alert_hotspot_post_enable_body:
			"「stellarmate」ホットスポットに接続し,完了したら [OK] を押して続行してください",

		alert_hotspot_disable_body:
			"ホットスポットを無効にすると、StellarMate は以前に記憶されたワイヤレス ネットワークに接続されます。ホットスポットが無効になっている場合、StellarMate を引き続き使用するには、同じネットワーク上にいる必要があります。続行しますか?",
		alert_factory_reset_confirmation_body:
			"デバイスを工場出荷時の設定にリセットしてもよろしいですか? すべての設定が消去されます.このアクションは元に戻せません!",
		alert_forget_wifi_title: "Wi-Fi を忘れる",
		alert_forget_wifi_body:
			"すべての WiFi ネットワークが消去され,StellarMate はホットスポット モードで実行されます。携帯電話/タブレットでホットスポット ネットワークに切り替える必要があります。続けたいですか？",

		alert_join_wifi_title: "Wi-Fi ネットワークに参加",
		alert_join_wifi_body:
			"Wi-Fi ネットワークに参加すると,StellarMate によるホットスポット (開始されている場合) が閉じます。StellarMate を引き続き使用するには,同じネットワーク上にいることを確認してください。続行しますか?",
		alert_change_band_title: "帯域を変更してもよろしいですか?",
		alert_change_band_body:
			"StellarMate アプリが切断され,チャネルの切り替えがさまざまな理由で失敗する可能性があります。その場合,ホットスポットはデフォルト設定に復元されます.",
		alert_change_resolution_title: "成功! ",
		alert_change_resolution_body:
			"解像度を有効にするためにStellarMateを再起動してください",
		alert_change_release_title: "ベータ チャネル",
		alert_change_release_body:
			"不安定でサポートされていないベータ チャネルに切り替えますか?",
		alert_direct_ethernet_title: "ダイレクト イーサネット",
		alert_direct_ethernet_connect_body:
			"StellarMate と PC をイーサネット ケーブルで直接接続します。PC を設定しますIP アドレスを 192.168.100.2 に,ゲートウェイを 192.168.100.1 に",
		alert_direct_ethernet_disconnect_body:
			"ダイレクト イーサネット ケーブルを取り外してください。",
		alert_clear_all_driver_config_title: "すべてのドライバー構成をクリアします",
		alert_clear_all_driver_config_body:
			"すべてのドライバー構成を削除してもよろしいですか?",
		alert_update_complete_title: "SM OSアップデート",
		alert_update_complete_body:
			"更新が完了しました。StellarMate を再起動してください。",
		alert_network_error_title: "ネットワーク エラー",
		alert_network_error_body: "ネットワーク情報のクエリに失敗しました",
		alert_delete_directory_message:
			"{0} ディレクトリとその下のすべてのファイルを削除しますか?",
		alert_permission_title: "場所の許可",
		alert_permission_description:
			"StellarMate アプリは,StellarMate ガジェットの場所をアプリの場所に同期するために場所情報を必要とします.続行しますか?",
		alert_remote_start: "リモート サポートを開始できませんでした: ",
		alert_remote_stop: "リモート サポートを停止できませんでした: ",
		alert_remote_id: "リモート サポート ID が見つかりませんでした",
		alert_remote_failed: "リモート サポート ID の取得に失敗しました: ",
		alert_remote_not_found: "リモート サポートが見つかりません: ",
		alert_permission_denied: "Permission Denied",
		alert_permission_blocked: "Permission Blocked",
		alert_grant_camera_permission: "You need to grant camera permission first",
		alert_feature_not_available: "This feature is not available",

		alert_logout_account_body: "Are you sure you want to logout?",
		alert_reset_ekoslive_title: "Reset Ekoslive",
		alert_reset_ekoslive_body:
			"Are you sure you want to reset Ekoslive? This would delete all cached images and restarts the server.",
		alert_download_index_file:
			"Astrometry Index files are missing. Would you like to download?",

		change_resolution_modal: {
			mode: "モード",
		},
		change_hostname_modal: {
			new_hostname: "新しいホスト名",
		},
		change_wifi_modal: {
			heading: "ネットワークに参加",
			ssid: "SSID",
			err_wifi: "Wi-Fi ネットワークの検索中に問題が発生しました。",
		},
		change_band_modal: {
			heading: "バンドの変更",
			band: "バンド",
			channel: "チャネル",
		},
		vnc_view: {
			heading: "VNC",
			alert_unreachable_title: "VNC に到達できません",
			alert_unreachable_body:
				"への接続の確立中に問題が発生したようですVNC ビューアー",
		},
		web_manager_view: {
			alert_unreachable_title: "Web Manager に到達できません",
			alert_unreachable_body:
				"Web Manager への接続確立中に問題が発生したようです",
		},
	},
	settings: {
		heading: "設定",
		言語: "言語",
		high_bandwidth: "高帯域幅",
		transfer_images: "画像の転送",
		notifications: "通知",
		sound: "サウンド",
		cloud_storage: "クラウド ストレージ",
		auto_sync: "自動同期",
		location: "場所",
		unit_system: "ユニットSystem",
		reset_app: "アプリをリセット",
		reset_app_body: "すべてのアプリ設定を消去しますか?",
		metric: "Metric",
		imperial: "Imperial",
		file_logging: "File logging",
		alert_delete_account_title: "Delete Account",
		alert_delete_account_body: "Are you sure you want to delete your account?",
		color_scheme_sky_map: "Sky Map Scheme",
	},
	cloud: {
		heading: "表示",
		btn_filters: "フィルター",
		btn_gallery: "ギャラリー",
		btn_offline_viewer: "オフライン ビューアー",
		btn_cloud_viewer: "Cloud Viewer",
		no_images_title: "画像が見つかりません",
		no_images_body: "フィルターを変更してみてください.",
		no_selected_title: "画像が選択されていません",
		no_selected_body: "ゲラから画像を選択してください",
		cloud_disabled_title: "クラウドが無効になっています",
		cloud_disabled_body:
			"設定に移動し,Cloud がこのタブにアクセスできるようにします。",
		pro_plan_body:
			"クラウド ストレージは Pro プランのユーザーのみが利用できます。",
		reset_ekoslive: "Reset Ekoslive",
		alert_cannot_download_title: "ダウンロードできません",
		alert_cannot_download_body:
			"エラーが発生しましたダウンロードしようとしています。",
		alert_confirm_delete_title: "よろしいですか?",
		alert_confirm_delete_body:
			"本当に {0} を削除しますか? 一度削除すると,元に戻すことはできません。",

		filters_drawer: {
			field: "分野",
			condition: "状態",
			value: "価値",
			btn_add_filter: "フィルタを追加",
			airmass: "気団",
			object: "オブジェクト",
			contains: "含む",
		},
		gallery_drawer: {
			all: "全て",
			h1: "1時間",
			h24: "24時間",
			d7: "7日",
			m1: "1ヶ月",
			y1: "1年",
			images: "画像",
			btn_sort: "SORT",
			btn_delete_all: "すべて削除",
			ascending: "A-Z",
			descending: "Z-A",

			alert_no_images_title: "画像がありません",
			alert_no_images_body: "ギャラリーに削除できる画像がありません.",
			alert_delete_all_body:
				"よろしいですか{0} 個の画像を削除しますか? これは元に戻せない操作です。",
			transfer_successful: "Image transfer is successful",
		},
		info_drawer: {
			add_tags_here: "ここにタグを追加",
			captured_on: "撮影日",
		},
	},
	about: {
		heading: "だいたい",
		bundle: "バンドル",
		copyright_line1:
			"StellarMate is developed by Ikarus Technologies © 2017-2023",
		copyright_line2: "Alamri Observatory による背景画像",
		credits: {
			heading: "Credits",
			title: "Translations",
			name: "Translator name",
		},
	},
	messages: {
		// polar align
		polar_idle:
			"このツールを使用すると、ドイツ赤道儀の極位置合わせを簡単に行うことができます。マウントを天の極に向け、カウンター ウェイトを下げたホーム ポジションに駐車します。マウントの方向と速度を選択し、[開始] をクリックしてプロセスを開始します。極が見えない場合は、SkyMap または Ekos マウント コントロールを使用して任意の場所 (できれば子午線の近く) をポイントし、自分の側に応じて東または西を選択し、必要に応じて回転角度を下げて、[開始] をクリックします。",
		alert_directions_not_found:
			"座標が見つかりません。ターゲットをフレーミングするか、手動で座標を入力してください",
		manual_rotator:
			"指定された角度だけカメラを回転させ、画像を撮影して位置角度を更新します",
		welcome: "ステラメイトへようこそ",
		no_logs: "No {0} logs found",
	},
	ekosLivePro: {
		pushNotification: "プッシュ通知",
		level: "通知レベル",
		settings: "EkosLive Pro 設定",
	},
	skymap: {
		goto: "Aller à",
	},
	device: {
		mirror: "Mirror External Display",
		monitor_successful: "StellarMate monitor Display changed successfully!",
		monitor_failed:
			"Failed to set StellarMate monitor display. Please try again later!",
		undefined_error: "Error is undefined",
		share: "Share logs",
		logs: "Logs",
		logs_upload: "Logs uploaded successfully to StellarMate support.",
		error_upload: "Error uploading logs",
		reset_network: "Reset network",

		vnc: {
			update_password: "Update VNC Password",
			scaling: "Scaling",
		},
	},
	controller: {
		dc_power: "12V DC Power",
		heaters: "Dew Heaters",
		varOutput: "Variable Output",
		reports: "Reports",
		voltage: "Voltage",
		current: "Current",
		power: "Power",
		active_antenna: "Active Antenna",
		passive_antenna: "Passive Antenna",
		power_sleep: "Power is in sleep mode. Tap to wake up.",
		power_off: "Power Off",
		power_off_tooltip:
			"Power Off all ports when equipment profile is disconnected.",
		leds: "LEDs",
		auto_dew: "Auto Dew",
		auto_dew1_threshold: "Dew 1 Thresh.",
		auto_dew2_threshold: "Dew 2 Thresh.",
		stepper: "Stepper",
		buzzer: "Buzzer",
		sensors: "Sensors",
		alert_power_port_description: "Are you sure you want to toggle off {0}?",
	},
	notifications: {
		ekoslive_successful: "Ekoslive Reset is Successful",
		ekoslive_restart: "Restarting Ekoslive",
		usb_reset: "USB reset is successful",
		feedback: "Feedback",
		stella_feedback_optional: "(Optional) Feel free to add more details.",
		stella_feedback: "Feedback submitted successfully.",
		stella_feedback_placeholder: "Please provide additional feedback",
		stella_prompt_request: "Request for Stella handled successfully",
		stella_xml_failure: "Failed to generate XML",
		stella_history_success: "History deleted successfully.",
		stella_history_failure: "Error deleting history",
	},
	hardware: {
		serial_devices_detected: "Serial Devices Detected",
		serial_port: "Serial Port",
	},
	tabs: {
		setup: "Setup",
		ekos: "Ekos",
		sky: "Sky",
		targets: "Targets",
		device: "Device",
		stella: "Stella",
	},
	stella: {
		confirm_ekos_running:
			"Please check the Ekos profile. Ekos must be online to continue",
		confirm_ekos_running_question:
			"This functionality requires Ekos Profile to be running. Would you like me to start the default profile?",
		action_in_progress: "Action in progress",
		action_completed: "Action completed successfully",
		confirm: "Confirm Response",
		narrate: "Narrate Response",
		notifications: {
			objects: "Stella has found some interesting objects",
			failed:
				"Stella didn't find anything this time. Could you try widening your search criteria or adjusting the filters?",
			pending: "Processing...",
			XML: {
				pending: "Generating XML...",
				error: "XML generation failed",
				success: "XML generated successfully",
			},
			image: {
				pending: "Processing image...",
				error: "Processing image error",
				success: "Processed image successfully",
			},
		},

		targets: {
			example: "Filter targets with Stella AI. Here are some examples:",
			galaxies: "1. Find all galaxies above 30 degrees at the North",
			nebulae: "2. Find all nebulae that are between 1 and 3 degrees",
			comets:
				"3. Find all comets above 40 degrees and I can observe with my camera",
		},
		view: {
			example: "Filter images with Stella AI. Here are some examples:",
			filter: "1. Filter images with Red filter",
			show_images: "2. Show me images that I took May 25",
			show_messier: "3. Show me M 31 images",
		},
	},
};
export default ja;
