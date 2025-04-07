const cn = {
	general: {
		home: "主页",
		next: "下一项",
		ok: "确认",
		done: "完成",
		cancel: "取消",
		confirm: "确认",
		auto: "自动",
		apply: "应用",
		enter: "输入",
		scan: "扫描",
		save: "保存",
		save_as: "保存为",
		overwrite: "覆盖",
		select: "选择",
		hardware: "硬件",
		signal: "信号",
		usb: "USB",
		devices: "设备",
		connect: "连接",
		disconnect: "断开",
		schedule: "计划",
		walk: "步进",
		yes: "是",
		no: "否",
		ignore: "忽略",
		error: "错误",
		back: "返回",
		delete: "删除",
		remove: "移除",
		online: "在线",
		offline: "离线",
		cloud: "云端",
		remote: "遥控",
		preset: "预设",
		camera: "相机",
		focuser: "电动调焦座",
		filter_wheel: "滤镜轮",
		filter: "滤镜",
		exposure: "曝光",
		binning: "像素合并",
		left: "左",
		top: "顶部",
		action: "动作",
		scope_type: "望远镜类型",
		solver_type: "解析类型",
		type: "类型",
		driver: "驱动",
		gain: "增益",
		offset: "偏置",
		format: "格式",
		iso: "ISO",
		count: "连拍", // Or 数量, 张数
		delay: "延时", // Or 延迟
		status: "状态",
		target: "目标",
		angle: "角度",
		sep_profile: "SEP文件", // Assuming SEP is specific acronym
		direction: "方向",
		rotation: "旋转",
		automatic: "自动",
		manual: "手动",
		progress: "处理", // Or 进度
		position_angle: "位置角", // Corrected from 方位角 (Position Angle vs Azimuth)
		details: "细节", // Or 详情
		skip: "跳过",
		updated: "已更新",
		new: "新建",
		remote_support: "远程帮助", // Or 远程支持
		logout: "登出",
		setting: "设置",
		hours: "时", // Or 小时
		minutes: "分", // Or 分钟
		seconds: "秒",
		introduction: "介绍",
		examples: "示例",
		chat: "聊天",
		controls: "控制",
		balance: "平衡",
		white: "白",
		black: "黑",
		datepick: "选择日期",
		north: "北",
		south: "南",
		east: "东",
		west: "西",
		released: "已发布",
		history: "历史记录",
		basic: "基础",
		expert: "专家",
		position: "位置",

		azimuth: "方位角", // Azimuth
		altitude: "高度角",
		tags: "标签",
		filename: "文件名",
		size: "尺寸", // Or 大小
		frame: "画幅", // Or 帧
		temperature: "温度",
		name: "名称",
		date: "日期",
		resolution: "分辨率",
		monitor: "监控",
		clear_all: "清除所有", // Or 全部清除
		pixels: "像素",

		select_file: "选择文件",
		select_folder: "选择文件夹",
		selected_dir: "已选目录",
		new_folder: "输入新文件夹名称", // Prompt, keeping original phrasing
		create_new_folder: "在此处创建新文件夹", // Action, keeping original phrasing
		empty_folder: "文件夹为空", // Status, keeping original phrasing

		train: "光路", // Optical Train
		no_data_found: "未找到数据",
		track: "跟踪", // Mount tracking
		jobs: "工作", // Or 任务
		category: "类别",
		profile: "档案", // Or 配置文件
		arcmin: "角分", // Unit
		calculate: "计算",
		update: "更新",
		center: "中心",
		learn_more: "了解更多",

		select_option: "请选择...", // Dropdown placeholder
		search: "查找...", // Search placeholder, keeping original
		no_results: "无结果",
		on: "开",
		off: "关",
		go: "前往",
		add: "添加",
		load: "加载",
		edit: "编辑",
		refresh: "刷新",
		reset: "重置",
		reset_all: "全部重置",
		start: "开始",
		stop: "停止",
		stopping: "停止中",
		clear: "清除",
		solve: "解析", // Plate Solve
		parked: "停放", // Mount Parked, Or 已归位
		unparked: "取消停放", // Mount Unparked, Or 取消归位
		open: "打开",
		close: "关闭",
		opened: "已打开",
		closed: "已关闭",
		enable: "允许", // Or 启用
		disable: "禁止", // Or 禁用
		select_time: "选择时间",
		set: "设置",
		logging: "日志",
		drivers: "驱动",
		network: "网络",
		submit: "提交",
		execute: "运行", // Or 执行
		retry: "重试",

		// Confirm Delete Alert
		alert_confirm_delete_title: "确认删除",
		alert_delete_profile_body: "您确认要删除所选的配置文件吗？", // Changed 文件 to 配置文件
		alert_delete_scope_body: "您确定要删除所选的望远镜吗？",

		// Confirm
		alert_confirmation_title: "确认",
		alert_confirmation_files: "您确定要删除这些被选中的文件吗？",
		alert_confirmation_body: "是否确实要使用此名称创建 {0}？",
		alert_overwrite_body: "文件“{0}”已存在。是否要覆盖它？",

		network_error: "请确认 StellarMate 已联网",
		internet_required: "请确认您已经联网",
		alert_comm_error_title: "连接错误",
		alert_comm_error_body: "与 StellarMate 连接失败。请确认您已经连接网络。",
		ekoslive_down_title: "EkosLive 停止运行",
		ekoslive_down_body:
			"EkosLive 不在工作中，尝试重启 StellarMate 或者联系 StellarMate 技术支持。",
		kstars_down_title: "KStars 停止工作",
		kstars_down_body:
			"KStars 不在工作中，尝试重启 StellarMate 或者联系 StellarMate 技术支持。",
		reset_default: "恢复默认设置",
		external_storage: "外部存储器",
		success: "成功",
		failed: "失败",
		file_too_large: "文件过大",

		public: "公开",
		private: "私有",
		label: "标签",

		users: "用户",
		title: "标题",
		submitted_by: "由上传", // Or 提交者
		submitted_date: "上传日期", // Or 提交日期
		publish_status: "发布状态",
		submission_status: "提交状态",
		access_level: "接入等级", // Or 访问级别
		description: "描述",
		acquisition_details: "细节", // Or 采集详情
		models: "模型", // Or 型号
		manufacturers: "发布者", // Or 制造商
		logo: "Logo", // Keep as Logo
		approve: "赞同", // Or 批准
		reject: "反对", // Or 拒绝
		confirm_approve: "确认赞同", // Or 确认批准
		confirm_reject: "确认反对", // Or 确认拒绝
		confirm_ban: "确认禁止", // Or 确认禁用
		confirm_delete: "确认删除",
		confirm_ignore: "确认忽略",

		product_range: "产品范围", // Or 产品系列
		image: "图像",

		owner: "所有者",
		country: "国家",
		region: "地区",
		pictures_captured: "图像已拍摄", // Or 已拍摄图像
		latitude: "纬度",
		longitude: "经度",
		elevation: "海拔",
		no_filter: "没有滤镜", // Or 无滤镜

		new_observatory: "新的观测站点", // Or 新建天文台

		go_back: "返回",
		go_home: "返回主页",
		go_to_feed: "前往反馈", // Or 前往动态
		go_to_users: "前往用户",
		go_to_equipment: "前往设备",
		go_to_observatories: "前往观测站点", // Or 前往天文台
		absent_page: "我的天哪！您访问的页面不存在",
		absent_user: "我的天哪！您访问的用户不存在",

		imaging: "摄影",
		engage: "参与",
		trash: "垃圾桶",
		unpublish: "取消发布",

		duplicate: "重复",
		blacklist: "黑名单",
		ban: "禁用",
		delete: "删除",
		manufacturer_tip_title: "添加新的设备厂家",
		manufacturer_tip_section_1:
			"在添加新厂家时，请在此部分仅输入厂家名称（例如，佳能、米德）。",
		manufacturer_tip_section_2:
			"特定型号（如 Meade LX200）应通过厂家的专用页面添加。",
		delete_post_description:
			"您确定要删除此帖子吗？此操作无法撤销，所有相关评论也将被删除。",
	},
	darkLibrary: {
		title: "暗场库",
		darks: "暗场",
		defects: "缺陷图", // Changed from 缺陷 for clarity
		prefer: "校准方式", // Or 首选校准方法
		create_darks_title: "创建暗场",
		create_defects_title: "创建缺陷图",
		view_masters_title: "查看主暗场",
		progress: "处理", // Or 进度

		create_darks: {
			exposure_range: "曝光范围",
			to: "至",
			temp_range: "温度范围",
			binning: "像素合并",
			binning_one: "1x1",
			binning_two: "2x2",
			binning_four: "4x4",
			total_images: "总共", // Or 总图像数
		},

		create_defect_map: {
			master_dark: "主暗场",
			bad_pixels: "坏点",
			hot_pixels: "热点", // Changed from 热噪 (Hot Pixels vs Hot Noise)
			generate_map: "生成图像", // Or 生成映射图
			save_map: "保存", // Or 保存映射图
			deviation: "σ (标准差)", // Added clarification for σ
		},
	},
	achievements: {
		score: "总得分",
		badge: "徽章",
		achievements: "成就",
		unlocked: "解锁成就",
		points: "分数",
		completed: "已完成",
		not_completed: "未完成",
		capture_preview_title: "首次之光！",
		ten_sequences_title: "星河相连",
		mount_goto_title: "魔法锁敌千里外", // Evocative, keeping original
		video_recording_title: "导演之剪", // Evocative, keeping original
		weather_check_title: "腾云驾雾", // Evocative, keeping original
		live_stacking_title: "星光闪耀", // Evocative, keeping original
		create_darks_title: "黑暗的力量", // Evocative, keeping original
		create_defect_title: "马赛克大师", // Evocative, keeping original (relates to defect map)
		import_mosaic_title: "拼图达人", // Evocative, keeping original
		messier_captured_title: "梅西耶探索者", // Evocative, keeping original
		all_messier_title: "梅西耶马拉松", // Evocative, keeping original
		scheduler_title: "序列规划师", // Evocative, keeping original
		capture_master_title: "天空捕手", // Evocative, keeping original
		capture_legend_title: "天空传说", // Evocative, keeping original
		paa_title: "完美主义者", // Evocative, keeping original (relates to PAA precision)
		guide_rms_title: "导星王中王", // Evocative, keeping original

		// Descriptions: Keeping original provided translations, assuming they are contextually correct and convey the intended meaning/tone.
		capture_preview_description:
			"拍摄预览图像：拍摄一张精美的预览图像，展现宇宙的神秘面貌。",
		ten_sequences_description:
			"星河连线：拍摄包含10张图像的序列，记录下宇宙中的连绵星光，串联成一幅壮丽的星河画卷。",
		// Note: Double underscore in original key
		mount_goto__description:
			"魔法定位：在新图像被捕获时，按住目标3秒钟来使用目标GOTO，在茫茫星空中精确定位，让您的望远镜准确锁定目标。",
		video_recording_description:
			"导演之剪：录制1分钟的时间流逝视频，将星空的变幻与宇宙的奥秘化为永恒的画面。",
		// Note: Double underscore in original key
		weather_check__description:
			"云层猎手：利用天气信息中的云图，至少放大8倍以检查天气，保证你的拍摄不受云层遮挡，尽情追寻星空的美丽。",
		live_stacking_description:
			"星光闪耀：实时叠加图像，至少执行5张图像，让宇宙中的星光在你的相机中闪耀绽放，谁说短曝不能拍深空。",
		create_darks_description:
			"黑暗的力量：创建50张暗场图像，用暗场干掉那些可恶的噪点。",
		create_defect_description:
			"马赛克大师：在马赛克修补图中生成80个以上的热点/冷点像素，用创造力修复图像的瑕疵，让宇宙的美丽更加完整无缺。",
		import_mosaic_description:
			"拼图达人：从相机导入需要的拼接图像，然后将多张图像拼接在一起，由此展现出更广阔的宇宙景象。",
		messier_captured_description:
			"梅西耶探索者：捕获了一个梅西耶天体，留下永恒的纪念，展示你对宇宙的探索精神和敏锐的观察力。",
		all_messier_description:
			"梅西耶马拉松：捕获了所有梅西耶天体，重走先人的探索之路。完成这一壮举，证明你是宇宙探索的真正先锋。",
		scheduler_description:
			"序列规划师：完成一个2小时或更长时间的拍摄序列，精准安排拍摄时间，捕捉到最佳的宇宙瞬间。",
		capture_master_description:
			"天空捕手：总共拍摄了500张图像，你是真正的天空捕手，记录下宇宙中的每一个细节和美丽瞬间。",
		capture_legend_description:
			"天空传说：总共拍摄了1000张图像，你已经成为天空摄影的传奇，你的作品将永远流传在宇宙之中。",
		paa_description:
			"完美主义者：在误差低于30角秒的情况下完成PAA，你的精确度和追求完美的态度令人钦佩。",
		guide_rms_description:
			"导星之王：使导星的总RMS误差小于0.5角秒，你是真正的导星之王，在与风、大气抖动的斗争中取得完美胜利。",
		filtered_image_description: "啊，是窄带！",
		gallery_image_description: "回忆过往",

		alert_reset_title: "重置成就",
		alert_agree_reset_body: "您确定要重置所有成就吗？",

		no_description: "莫得描述",
		complete_tour_guide: "完成入门指导",
		file_stored: "文件已存储",
	},
	tourGuide: {
		tour_guide: "指导", // Or 指南
		previous: "上一页",
		finish: "完成",
		title_devices_list: "设备列表",
		title_device_actions: "设备操作",
		title_profiles: "设备配置文件",
		title_port_selector: "端口选择",
		title_trains: "光路配置",
		title_weather_bar: "天气信息栏",
		title_cloud_report: "云量报告",
		title_next: "下一步是什么？",

		title_focus: "调焦",
		title_align: "对准",
		title_guide: "导星",
		title_capture: "拍摄",
		title_mount: "赤道仪",
		title_observatory: "天文台",
		title_scheduler: "序列",
		title_indi: "INDI控制面板",
		title_quick_controls: "快速控制",
		title_preview: "预览图像",
		title_framing: "拍摄",
		title_live_video: "实时视频",
		title_stop: "停止",
		title_live_stacking: "实时叠加",
		title_quick_settings: "快速相机设置",

		title_targets_info: "目标信息",
		title_search_bar: "搜索栏",
		title_time_controls: "时间设置",
		title_target_controls: "目标控制",
		title_object_info: "目标信息",
		title_fov: "视场", // Field of View
		title_target_action: "目标动作",
		title_stella_prompt: "Stella提示词",

		title_focus_initial: "当前位置",
		title_focus_steps: "目标位置",
		title_focus_size: "步长",

		// Basic/Expert Mode - Keeping original translations
		title_basic_paa: "基础模式",
		description_basic_paa: "基础模式是为天文摄影初学者设计的简化工作流程。",
		title_basic_controls: "工作流步骤",
		description_basic_controls: "随时导航到任何工作流步骤。",
		title_toggle_mode: "模式切换",
		description_toggle_mode: "在专家模式和基础模式之间切换。",

		// PAA - Keeping original translations
		title_paa_controls: "极轴校准控制",
		description_paa_controls:
			"Ekos 将旋转赤道仪两次以进行极轴校准。设置速度、角度和方向 (W/E)。如果没有 GOTO 功能，请切换为手动赤道仪。按播放开始。",
		title_paa_message: "引导说明",
		description_paa_message: "遵循引导步骤，直到极轴校准完成。",

		// Targets - Keeping original translations
		title_targets_mode: "目标选择",
		description_targets_mode:
			"跨不同类别搜索天体。查看任何天体目标的高度与时间图表和可观测性数据。",
		title_overlay_type: "目标类别",
		description_overlay_type: "选择目标类别以查看按星等排序的天体目标。",
		title_target_chart: "高度 vs 时间",
		description_target_chart:
			"显示高度与时间图表，带有 GO 按钮以移动和居中目标。",

		// Basic Focus - Keeping original translations
		title_basic_focus: "对焦您的目标",
		description_basic_focus:
			"使用电动调焦器获得清晰图像，或在监控 HFR 图表（越低越好）的同时手动对焦。",
		title_focus_settings: "对焦控制",
		description_focus_settings:
			"使用循环按钮框定具有清晰可辨星星的目标。设置合适的步长，然后按播放进行精细自动对焦。",
		title_focus_graph: "对焦图表",
		description_focus_graph:
			"查看显示对焦质量的半峰全宽 (HFR) 与步长图表。自动对焦创建 V 形曲线以找到临界对焦区 (CFZ)。循环时，会为每次曝光绘制 HFR。",
		title_focus_image: "对焦图像",
		description_focus_image:
			"在对焦图像中监控星点的锐度。切换全屏以查看详细视图。",
		// Keeping original (refers to UI element)
		description_targets_fov:
			"Displays camera FOV indicator over target with size (arcmin) in top corner and orientation (degrees) in top-right.",

		// Basic Guide - Keeping original translations
		title_basic_guide: "自动导星",
		description_basic_guide:
			"使用导星镜或离轴导星器帮助 Ekos 在长时间曝光成像期间保持目标居中。",
		title_guide_controls: "导星控制",
		description_guide_controls:
			"调整导星相机设置，并使用取景按钮确保星星可辨。将导星方式设置为赤道仪（默认）或 ST4。按播放开始校准和自动导星。",
		title_guide_chart: "导星图表",
		description_guide_chart:
			"导星趋势图，显示跟踪精度，包含随时间变化的 RA（绿色）、DEC（蓝色）和总计（红色）的 RMS 误差。",
		title_guide_image: "导星图像",
		description_guide_image:
			"带有​​多星跟踪叠加层的导星图像。切换全屏以查看详细视图。",

		// Basic Capture - Keeping original translations
		title_basic_capture: "拍摄计划器",
		description_basic_capture:
			"配置图像捕获设置（曝光、滤镜、像素合并等）并添加到您的序列中。按播放开始捕获您的成像目标。",
		title_capture_controls: "拍摄控制",
		description_capture_controls:
			"配置拍摄设置，设置数量，然后按添加以包含在序列队列中。",
		title_manage_sequences: "管理序列",
		description_manage_sequences: "保存、加载、删除和组织您的成像序列。",
		title_capture_actions: "拍摄动作",
		description_capture_actions:
			"按播放开始成像序列。切换实时叠加以获取实时组合图像，同时保留单个帧。",

		// Summary - Keeping original translations
		title_summary: "摘要",
		description_summary:
			"在一个显示屏中监控所有操作（导星、对焦、对准、拍摄）并查看捕获的图像。",
		title_histogram: "切换直方图",
		description_histogram:
			"切换直方图视图。仅调整序列图像的阴影、中间调和高光（不适用于实时叠加图像）。",

		// Descriptions: Keeping original translations
		description_devices_list:
			"自动发现和手动添加的 StellarMate 设备列表。单击重新扫描以检测网络上的新 StellarMate 设备。",
		description_device_actions:
			"从列表中删除设备，执行恢复出厂设置或注销操作。",
		description_profiles:
			"在设备配置文件中管理天文设备。必须在启动配置文件前将所有设备接通并连接到 StellarMate。开始配置文件后，请使用光路配置来配置每个设备的功能，然后单击 Ekos 按钮开始天体摄影会话。",
		description_port_selector:
			"在首次启动配置文件后，选择您设备的串口和/或网络设置。",
		description_trains:
			"使用光路配置来管理您的设备。为每个相机创建一个配置文件。", // Changed 视场 to 光路
		description_weather_bar: "简要的天气报告和当前站点波尔特暗夜等级。",
		description_cloud_report: "云量超过3小时。",
		description_next:
			"通过单击目标选项卡，探索适用的天文目标。使用 Go&Solve 将您的目标居中在相机视场中。打开定位助手，实现完美的期望方向。前往 Ekos 选项卡设置图像序列和实时叠加图像。",

		description_focus: "使用电调进行对焦。",
		description_align: "通过解析图像获取当前指向坐标，使望远镜精确对准目标。",
		description_guide:
			"跟踪您的目标，保持赤道仪锁定，并使其能够进行长时间曝光。",
		description_capture:
			"使用可配置的设置创建图像序列。管理滤镜轮和暗场存储库。",
		description_mount: "切换跟踪，归位和中天翻转设置。配置自动归位。", // Changed 自动零位 to 自动归位
		description_observatory: "控制圆顶和防尘盖设备。",
		description_scheduler:
			"通过选择目标和序列文件来自动化整个天体摄影。从 Telescopius 导入拼接。",
		description_indi: "直接访问INDI控制面板。",
		description_quick_controls: "快速访问赤道仪，相机和转台控件。",
		description_preview: "拍摄图像预览。",
		description_framing: "无限循环曝光，直到停止。",
		description_live_video: "开始实时视频流并保存到本地。", // Corrected typo 报错 -> 保存
		description_stop: "停止任何正在进行的曝光或录制。",
		description_live_stacking:
			"实时叠加图像以增加信噪比。如果存在进行中的拍摄序列，则实时叠加将使用实时获取的图像；否则，它将使用快速相机设置中的设置循环曝光。",
		description_quick_settings: "选择光路配置文件并配置相机和滤镜轮设置。", // Changed 视场 to 光路

		description_targets_info:
			"目标管理器是 StellarMate 规划工具，可简化观测操作。从数千个天体中搜索并使用简单的标准进行过滤。使用定位助手定位您的目标。",
		description_search_bar:
			"过滤现有清单中的对象或通过输入名称并单击搜索按钮来搜索新对象。",
		description_time_controls:
			"如果 Ekos 处于离线状态，请调整目标日期和时间计算。",
		description_target_controls:
			"查看黄昏信息，管理视场范围，调整滤镜并选择目标类型。",
		description_object_info: "目标大小、升起、中天和落下时间。", // Corrected 物体 -> 目标, 过境 -> 中天, 设置 -> 落下
		description_fov: "单击进入构图助手模式。",
		description_target_action:
			"将目标添加到收藏夹或自定义列表中。仅命令 GOTO 或命令 GOTO 后拍摄和解析。如果 Ekos 处于离线状态，则安排该目标。",
		alert_guided_tour_title: "进行一次领略 Stellarmate 魅力的导览",

		description_stella_intro:
			"Stella 是你的个人智能数字助手。你可以通过语音或文本与 Stella 进行交流。向它询问任何天文学相关的主题。",
		description_stella_example: "查看示例提示。",
		description_stella_chat: "查看聊天记录。",
		description_stella_input: "输入你的提示以请求任务或检索数据。",
		description_stella_other_function:
			"你还可以通过语音与 Stella 互动并附加文件。",
		description_align_paa: "极轴校准您的赤道仪，以实现更好的追踪和导星性能。",
		description_align_load: "加载并解析一张图像 (JPG, FITS, XISF)。", // Corrected 板Solve -> 解析
		description_align_controls:
			"您可以查看校准图表、图像、设置和快速访问设置。您也可以开始校准。",
		description_align_solution: "解析结果", // Corrected 板Solve解决方案 -> 解析结果

		description_focus_initial: "当前调焦器位置和对焦顾问。",
		description_focus_steps: "目标位置。",
		description_focus_size: "运行自动对焦时的步进大小。",
		description_focus_exposure: "曝光时间和循环拍摄切换。", // Corrected 构图 -> 循环拍摄
		description_focus_controls:
			"您可以查看对焦图表、图像、设置和快速访问设置。您也可以开始对焦。",

		description_guide_camera: "拍摄和循环拍摄。",
		description_guide_status: "导星状态。",
		description_guide_controls:
			"您可以查看导星图表、图像、设置和快速访问设置。您也可以开始导星。",

		description_search_filter: "按元数据筛选。",
		description_search_live: "按名称搜索。",
		description_feed_all: "显示所有用户的帖子。",
		description_feed_following: "显示您关注的用户的帖子。",
		description_feed_saved: "显示已收藏的帖子。",
		description_feed_add: "添加一条新帖子。",
		description_profile_posts:
			"此标签显示您的帖子。您可以在这里查看您创建的所有帖子。",
		description_profile_image: "RAW 图像。",
		description_profile_achievements: "成就追踪器。",
		description_observatory_map: "公共天文台地图。",

		initial_tour_guide: {
			// Keeping original translations
			profile_general:
				"这是您的个人资料页面，您可以在此管理账户设置和个人信息。",
			side_panel:
				"左侧面板是主导航。在这里，您可以浏览照片、与其他用户互动，以及查看天文台信息。",
			profile_page: "浏览您的个人资料，探索可用于管理账户的功能。",
			profile_next: "接下来，看看动态页面，在那里您可以浏览其他用户的帖子。",

			feed_general:
				"这是动态页面，您可以在这里查看其他人分享的图片、查看书签并上传自己的照片。",
			feed_page: "在这里浏览其他用户的帖子。",
			feed_next: "接下来，探索用户页面，寻找并与其他人互动。",

			users_general:
				"这是用户页面，您可以在这里搜索、筛选并关注社区中的其他成员。",
			users_page: "在这里发现并与其他用户互动。",
			users_next: "接下来，让我们访问设备页面，探索天文工具。",

			equipment_general:
				"欢迎来到设备页面，在这里您可以浏览并了解各种天文设备。",
			equipment_page:
				"查看天文设备类型。点击任一类型可列出该类型设备的所有制造商，然后点击制造商以查看所有型号。",
			equipment_next: "接下来，探索天文台页面以查看和管理天文台。",

			observatories_general:
				"欢迎来到天文台页面！在这里，您可以浏览其他用户创建的天文台并管理您自己的天文台。",
			observatories_page: "在此部分查看和管理天文台。",

			final_step:
				"恭喜！您已完成导览。现在是时候深入探索这个平台所提供的一切了。",
		},
	},
	tooltip: {
		// Keeping placeholders like %{0}, %Datetime etc.
		placeholder: "占位符 %{0} 或 %{1}",
		placeholder_file: "不带扩展名的 .esq 文件名。",
		placeholder_date: "保存文件时的当前时间和日期。",
		placeholder_type: "帧类型，例如：'亮场'、'暗场'",
		placeholder_exp: "曝光时长（秒）。",
		placeholder_exposure:
			"曝光持续时间以秒为单位，为普通数字，后缀不含任何单位。", // Corrected typo
		placeholder_offset: "偏置。",
		placeholder_gain: "增益。",
		placeholder_bin: "像素合并。",
		placeholder_iso: "ISO (仅单反)。",
		placeholder_pierside: "赤道仪指向", // Pier side
		placeholder_temperature: "相机温度",
		placeholder_filter: "当前滤镜名称。",
		placeholder_seq:
			"图像序列标识符，其中 * 是使用的数字位数 (1-9)。此标记是必需的并且必须是格式中的最后一个元素。", // Clarified '*' meaning
		placeholder_target: "目标名称。",
		placeholder_arbitrary:
			"格式字符串中也可以包括任意文本，% 和 / 字符除外。/ 字符可用于定义任意目录。", // Clarified '/' usage
		placeholder_notes: "注意：",
		placeholder_case: "• 标签区分大小写",
		placeholder_datetime:
			"• 只在格式的文件名部分使用 %Datetime 标记，而不在路径定义中使用。",
		format_title: "使用占位符标记来定义图像文件名的格式。",
		suffix: "用于在文件名中附加序列号的数字位数。",
		// Polar Alignment Assistant Description
		paa_desc:
			"在极轴校准过程中使用解析法。解析速度较慢，但可以提供更准确的结果。",
		// Plate Solving Description
		plate_solving:
			"使用解析获取校准过程中的指向偏差。用户应尝试减少下面更新错误行中的误差并最小化偏移。",
		mount_info: "赤道仪转动并计算误差",
		movestar_desc:
			"类似于 Move Star，但是 Ekos 尝试跟踪正在移动的星点，并在可能时估计当前对准误差。", // Corrected 星星 -> 星点
		remote_description:
			"将远程 INDI 驱动程序添加到此配置文件配置的本地 INDI 服务器链中。此字段的格式应为引号括起来的驱动程序名称、主机名/地址以及可选端口的逗号分隔列表：",
		remote_zwo_description: "连接到 192.168.1.50，端口 8000 上的指定相机。",
		remote_eqmod_description: "连接到 192.168.1.50，端口 7624 上的指定赤道仪。", // Changed 云台 -> 赤道仪
		remote_port: "连接到 192.168.1.50，端口 8000 上找到的所有驱动程序。",
		remote_ip: "连接到 192.168.1.50，端口 7624 上找到的所有驱动程序。",
		remote_info:
			"如果省略，主机默认设置为 localhost，端口默认设置为 7624。远程 INDI 驱动程序必须已在运行，以便连接成功。",
	},
	splash: {
		checking_for_updates: "检测更新中...",
		downloading_package: "下载更新中...",
		installing_update: "安装更新包...",
		channel_update: "正在进行信道切换...",
		upto_date: "已是最新版本",
		update_installed: "更新已安装",
		loading: "加载中...",
	},
	validations: {
		username_required: "请输入用户名",
		username_tooshort: "至少需要3个字符",
		username_toolong: "不能超过64个字符",
		username_invalid: "用户名含有非法字符",
		password_required: "请输入密码",
		password_invalid: "至少需要6位",
		confirm_password_required: "请确认密码",
		confirm_password_mismatch: "密码不匹配",
		email_required: "请填写邮箱",
		email_invalid: "邮箱地址无效",
		license_required: "请输入许可证密钥",
		serial_required: "请输入序列号",
		new_scope_vendor: "请输入有效的制造商名称",
		new_scope_model_invalid: "请输入有效的型号",
		new_scope_aperture_invalid: "请输入有效的口径",
		new_scope_focal_length_invalid: "请输入有效的焦距",
		new_scope_focal_ratio_invalid: "请输入有效的焦比",
	},
	progress: {
		start_capture: "开始拍摄...",
		please_wait: "请稍候 ...",
		establishing_connection: "正在建立连接",
		cameras: "获取相机",
		mounts: "获取赤道仪",
		scopes: "获取望远镜",
		filter_wheels: "获取滤镜轮",
		registering: "注册中",
		registered: "注册完毕",
		authenticating: "登录中", // Or 认证中
		authenticated: "登录完毕", // Or 认证完毕
		checking_kstars: "检查 KStars",
		kstars_open: "KStars 启动",
		checking_ekoslive: "检查 EkosLive...",
		ekoslive_connected: "EkosLive 已连接",
		starting_ekos: "启动 Ekos...",
		getting_devices: "获取设备...",
		loading_settings: "加载配置...",
		register_device: "已扫描二维码，注册设备: ",
	},
	welcome: {
		register_new_device: "注册新设备？",
		have_existing_account: "已有账户？",
		require_sm_plus_pro: "如果已购买，请注册",
	},
	device_scanner: {
		scanning: "正在联网获取 StellarMate 设备中，请稍候...",
		qr_scan: "扫描设备上的二维码",
	},
	statuses: {
		// Status indicators
		Idle: "闲置",
		prep: "准备", // Preparation
		run: "运行", // Running
		Aborted: "中断", // Or 已中止
		"Calibration error": "校准错误",
		Capturing: "正在捕获", // Or 拍摄中
		"In Progress": "进行中",
		"Setting Temperature": "设置温度",
		Slewing: "移动中", // Mount slewing
		Calibrating: "校准中",
		Tracking: "追踪中", // Mount tracking
		Guiding: "导星中", // Autoguiding
		Parking: "停放中", // Mount parking
		"User Input": "用户输入", // Changed 请输入 -> 用户输入
		Complete: "完成",
		Suspended: "暂停", // Or 已挂起
		Parked: "已停放", // Mount parked, Or 已归位
	},
	connect: {
		register_welcome: "请登录您的 Stellarmate 账号以同步设备。",
		welcome_heading: "欢迎使用",
		welcome_description:
			"请确认您已连接至 StellarMate 的热点或 StellarMate 与您的设备处于同一网络中。",
		welcome_rescan: "点击“重新扫描”扫描局域网中的 StellarMate",
		device_unreachable: "设备无法访问！请检查电源和网络设置。",
		login_mismatch:
			"认证失败。App 密码与 stellarmate.com 上设定的密码不一致。请使用正确密码再次登入。",
		register_using_key: "使用序列号注册设备",
		old_stellarmate_heading: "版本过旧。请更新！",
		old_stellarmate_description:
			"您正在使用 StellarMate OS 的旧版本。若想继续使用本应用，请务必更新至 StellarMate 的最新版本。",
		primary: "主镜", // Primary scope/camera
		guide: "导星相机", // Guide camera
		scope: "导星镜", // Guide scope
		btn_rescan: "重新扫描",
		btn_port_select: "端口选择",
		btn_sync_gps: "同步GPS",
		btn_dslr_setup: "相机设置", // Or 单反设置
		btn_clear_driver_config: "清除驱动配置", // Changed 设备设置 -> 驱动配置
		scan_in_progress: "正在扫描 ...",
		connection_in_progress: "正在连接 StellarMate...",
		registration_in_progress: "正在注册 StellarMate...",
		logging_in_progress: "正在登陆 StellarMate...",
		connecting: "连接中...",
		logging: "登陆中...", // Or 登录中
		generic: "通用串口",
		select_driver: "请选择设备类别和驱动",
		invalid_ip: "找不到 IP 地址或 IP {0} 无效。请再试一次。", // Keeping placeholder

		cloudsMap: {
			btn_clouds_map: "云图",
			attribution: "OpenStreetMap",
			map_title: "三小时内云图",
			bortle_class: "暗夜等级", // Bortle Scale
		},

		ip_address: "请输入IP地址",
		login_register: {
			heading: "认证",
			heading_online: "请登录 stellarmate.com",
			connect_to_internet: "您必须联网",
			connect_to_sync: "此操作仅用于同步您的帐户。",
			reset_app:
				"提示：您可以通过转到“关于”选项卡，单击“重置应用”按钮，然后重新启动应用，将应用与您的在线帐户重新同步。", // Corrected "关于" 选项卡, 重置 App -> 重置应用
			no_valid_device: "无有效的设备信息",
			setup_guide: "设置导星",
			register: "注册",
			login: "登入", // Or 登录
			serial: "序列号 #",
			license: "许可证密钥",
			username: "用户名",
			password: "密码",
			confirm_password: "确认密码",
			first_name: "名",
			last_name: "姓",
			email: "邮箱",
			manually: "手动",
		},
		device_manager: {
			alert_confirm_remove_title: "确认移除",
			alert_confirm_remove_body: "确定移除该设备？",
			btn_sign_out: "登出",
		},
		profile_manager: {
			heading: "配置文件",
		},
		port_selector: {
			connect_all: "连接所有",
		},
		manually_add_device: {
			heading: "手动添加设备",
			btn_add_device: "添加设备",
			alert_unreachable_title: "发生错误",
			alert_unreachable_body:
				"尝试在指定的 IP 地址处寻找设备时出错，请检查 IP 地址，然后重试。",
		},
		device_scanner: {
			no_device_before_scan: "未检测到设备，请运行扫描程序",
			no_device_after_scan: "扫描完成，未发现设备",
			auto_scanned: "自动扫描",
			manually_added: "手动添加",
			add_a_device: "添加设备",
			devices_detected: "检测完毕", // Or 检测到设备
			no_network_found: "未发现设备，请确认您的网络连接", // Or 未找到网络
		},
		add_profile: {
			add_profile: "添加配置文件",
			edit_profile: "编辑配置文件",
			mount: "赤道仪",
			ccd: "主相机 1", // CCD is often used generically for primary astro camera
			dome: "圆顶", // Changed 穹顶 -> 圆顶 for consistency
			focuser: "电动调焦座",
			filter: "滤镜", // Or 滤镜轮 if it's always the wheel
			guider: "导星相机", // Changed 主相机 2 -> 导星相机
			ao: "自适应光学", // Adaptive Optics - changed 设备 -> 光学
			weather: "天气", // Weather station
			aux1: "辅助设备 1", // Keeping numbering
			aux2: "辅助设备 2",
			aux3: "辅助设备 3",
			aux4: "辅助设备 4",
			indi_server: "INDI 服务器", // Changed INDI服务器 -> INDI 服务器
			local: "本地",
			host: "主机",
			web_manager: "INDI 网络管理器", // Changed INDI网络管理器 -> INDI 网络管理器
			profile_settings: "配置设定",
			auto_connect: "自动连接",
			port_selector: "端口选择器",
			usb_reset: "强制 USB 重置",
			remote_drivers: "远程驱动程序",
		},
		add_scope: {
			add_scope: "添加望远镜",
			edit_scope: "编辑望远镜",
			vendor: "厂商", // Or 制造商
			aperture: "口径 (mm)",
			focal_length: "焦距 (mm)",
		},
		auto_detect: {
			alert_auto_detect_title: "自动检测说明",
			alert_auto_detect_body:
				"请先从 StellarMate 中拔出所有设备，然后按“确认”。然后逐个插入它们以检测设备类型和驱动程序。在每个设备插入后，您需要确认驱动程序。", // Changed 确定 -> “确认”
			alert_mapped_title: "设备映射",
			alert_mapped_body: "设备串行端口成功映射。",
			alert_missing_driver_title: "缺少驱动", // Changed 设备 -> 驱动
			alert_missing_driver_body: "您必须先选择一个驱动。", // Changed 设备 -> 驱动
		},
		dslr_setup: {
			width: "宽",
			height: "高",
			pixel_width: "像素宽",
			pixel_height: "像素高",
		},
		observatory: {
			observatory_name: "天文台名称",
			bortle_scale: "波特尔等级",
			observatory_delete_submit:
				"您确定要删除天文台吗？所有设备及其设备档案也将被删除。",
			observatory_delete_title: "删除天文台",
			empty_profile: "所选档案当前没有设备。要继续，请添加新设备。",
			empty_profiles_list: "所选天文台当前没有设备档案。要继续，请添加新档案。",
			manufacturer: "制造商",
			profile_name: "档案名称",
			no_profiles_found: "所选天文台当前没有设备档案。",
			no_equipment_found: "未找到此档案的设备。",
			synchronized_profile: "此档案已与 KStars 档案同步。",
			map_to_existing_profile: "映射到现有 KStars 档案",
			map_to_new_profile: "映射到新 KStars 档案",
			select_kstars_profile: "选择 KStars 档案",
			warning_equipment_mismatch: "警告：检测到设备不匹配",
			indi_driver: "INDI 驱动",
			kstars_profile: "KStars 档案",
			not_connected_to_kstars:
				"未检测到设备档案。请确保 KStars 已连接到 EkosLive。",
		},
		no_connected_instances:
			"未检测到活动实例，请确保 KStars 已连接且未与其他天文台链接。",
		observatories: "天文台",
		equipment: "设备",
	},
	targets: {
		now: "现在",
		night: "夜晚",
		rise: "升起",
		moon: "月亮",
		sun: "太阳",
		search: "搜索",
		cam_width: "视场宽度", // FOV Width
		cam_height: "视场高度", // FOV Height
		fov_warning: "视场太小或太大，请检查！",
		phases: {
			// Moon phases
			new_moon: "新月",
			full_moon: "满月",
			first_quarter: "上弦月",
			third_quarter: "下弦月",
			waxing_crescent: "娥眉月", // Growing crescent
			waxing_gibbous: "盈凸月", // Growing gibbous
			waning_crescent: "残月", // Shrinking crescent
			waning_gibbous: "亏凸月", // Shrinking gibbous
		},
		lists: "列表",
		framing_assistant: "构图助手", // Changed 定位助手 -> 构图助手 (Framing)
		target_rotation: "目标位置角", // Changed 目标方位角 -> 目标位置角 (PA)
		current_rotation: "当前位置角", // Changed 当前方位角 -> 当前位置角 (PA)
		rotate_capture: "旋转并拍摄",
		goto_rotate: "前往并旋转", // Changed 去 -> 前往
		angular_offset: "角度偏差",
		no_objects_in_list: "找不到目标。请检查活动列表，调整或重置过滤器。",
		go_and_solve: "前往并解析", // GoTo and Plate Solve
		fov_profile: "视场角配置", // Or 视场配置文件
		fov_width: "视场宽度",
		fov_height: "视场高度",
		alert_select_FOV_body: "请创建或选择一个视场配置文件，以便使用构图助手。", // Changed FOV配置文件 -> 视场配置文件
		alert_list_exists_body: "相同名称的列表已存在！",
	},
	ekos: {
		heading: "Ekos",
		tgl_mount: "赤道仪",
		tgl_solution_bar: "状态栏", // Or 解析结果栏
		tgl_sequence: "拍摄队列",
		tgl_properties: "属性",
		alert_ekos_offline_title: "Ekos 离线", // Changed 离线中 -> 离线
		alert_ekos_offline_body: "Ekos 目前处于离线状态，是否要启动设备配置文件？", // Changed 设备匹配 -> 设备配置文件
		ekos_dialog: {
			auto_closes_in: "自动关闭于", // Or 秒后自动关闭
		},
		indi: {
			no_logs: "没有可用于此驱动的日志",
		},
		controls_bar: {
			mount_speed: "赤道仪转速",
			centering: "居中",
			find: "寻找",
			max: "最大",
			parking_position: "归位位置设置成功",
		},
		collapse_align: {
			// Alignment Module (Plate Solving, PAA)
			heading: "对准", // Changed 导星 -> 对准 (Alignment includes solving & PAA)
			action_sync: "同步", // Sync mount to solved coords
			action_slew: "移动至目标", // Slew mount to target coords (changed 转动 -> 移动)
			action_nothing: "不进行任何操作", // Do nothing after solve
			solver_backend: "解析后端", // Changed 解析平台 -> 解析后端 (e.g., Astrometry.net local/remote)
			control: "控制",
			solve: "拍摄 & 解析", // Capture & Plate Solve
			load: "加载 & 解析", // Load Image & Plate Solve (changed 转动 -> 解析)
			polar: "极轴校准", // Polar Alignment Assistant (PAA)
			accuracy: "精度", // Required solving accuracy
			settle: "稳定时间", // Time to wait after slew/correction
			dark: "暗场", // Use dark frame for solving
			arcsec: "角秒", // Unit
			ms: "毫秒", // Unit
			x_axis: "迭代次数", // Graph X axis
			y_axis: "误差 (角秒)", // Graph Y axis
			refresh_rate: "刷新频率",
			image_selected: "图像选择成功",
			select_method: "请选择图像的选择模式",
			device_gallery: "设备相册", // Changed 手机/平板电脑库 -> 设备相册
			sm_storage: "SM 存储", // StellarMate Storage
			request_storage_permission: "请允许存储权限",
			celestial_warning: "解析在靠近天极处可能无法使用！", // Changed 无法使用 -> 可能无法使用
			manualRotator: {
				// Manual Rotator Helper
				heading: "手动旋转器", // Changed 转动器 -> 旋转器
				current_pa: "当前位置角",
				target_pa: "目标位置角",
				another_image: "拍摄另一张图片",
			},
			align_settings: {
				// Alignment Settings
				rotator_control: "旋转器控制", // Changed 场旋器 -> 旋转器
				use_scale: "使用缩放", // Use pixel scale hint
				use_position: "使用位置", // Use RA/DEC hint
			},
			calibration_settings: {
				// Guiding Calibration Settings (often grouped with Align)
				pulse: "脉冲", // Guide pulse duration
				max_move: "最大移动范围", // Max move during calibration
				iterations: "迭代", // Calibration iterations
				two_axis: "双轴", // Calibrate both axes
				square_size: "自动方块大小", // Changed 正方形 -> 方块
				calibrate_backlast: "导星校准时消除赤纬反冲", // Changed 背隙 -> 反冲 (Backlash)
				reset_calibration: "每次望远镜移动后重置导星校准",
				reuse_calibration: "尽可能存储和重复使用导星校准",
				reverse_calibration: "赤道仪中天翻转时，反转赤纬以复用校准值", // Changed 重复使用 -> 复用
				skyflats: "天空平场", // Option related to calibration? Seems misplaced, but keeping.
			},
		},

		collapse_camera: {
			// Camera Module
			heading: "相机设置",
			type_light: "亮场",
			type_bias: "偏置",
			type_flat: "平场",
			type_dark: "暗场",
			format_fits: "FITS",
			format_native: "RAW", // Or 原生
			cooling_unavailable: "制冷功能不可用",
			btn_add_to_sequence: "添加到拍摄序列",
			btn_loop: "循环", // Loop exposures

			rotator_control: {
				// Rotator Settings (often in Camera or specific Rotator module)
				title: "旋转器",
				angle: "旋转角度", // Changed 场旋角度 -> 旋转角度
				offset: "相机偏移",
				pierside: "赤道仪指向", // Changed 相机立柱侧 -> 赤道仪指向 (Pier side)
				flip: "翻转策略", // Meridian flip strategy
				pos_angle: "相机位置角", // PA
				reverse_direction: "反转旋转器方向", // Changed 反转旋转器 -> 反转旋转器方向
				flip_rotator: "翻转时保存旋转角", // Changed 保存旋转角 -> 翻转时保存旋转角
				flip_position: "翻转时保存位置角", // Changed 保存方位角 -> 翻转时保存位置角
			},

			capture_settings: {
				// General Capture Settings
				miscellaneous: "杂项",
				temperature: "温度阈值",
				temperature_tooltip:
					"请求温度设定点与测量温度设定点之间的最大可接受差值。当温度差值低于此阈值时，温度设定点请求被认为是成功的。", // Corrected typo, clarified meaning
				guiding: "导星稳定",
				guiding_tooltip: "在导星恢复后等待几秒钟，以稳定导星。",
				dialog: "对话框超时", // Changed 对话 -> 对话框
				dialog_tooltip: "关闭或打开望远镜对话框的超时时间（秒）。", // Corrected typo
				reset_sequence: "每次启动后重置拍摄队列", // Changed 重启 -> 启动
				reset_sequence_tooltip:
					"开始序列时，将所有已拍摄计数重置为零。启用“记住序列进度”后，此选项将被覆盖。", // Corrected 序列功能将覆盖此选项
				reset_mount: "中天翻转后重置赤道仪校准模型",
				reset_mount_tooltip: "中天翻转后重置赤道仪校准模型。", // Removed duplicate text
				use_flip: "若赤道仪支持，则使用翻转功能", // Changed 在赤道仪支持的情况下使用反转功能 -> 若赤道仪支持，则使用翻转功能
				use_flip_tooltip: "若赤道仪支持，则使用其内置的翻转功能。", // Clarified
				summary_preview: "摘要缩略图预览", // Changed 缩略图预览 -> 摘要缩略图预览
				summary_preview_tooltip: "在摘要视图中预览拍摄到的 FITS 图像。", // Corrected 缩略图中 -> 摘要视图中
				operations_timeout: "操作超时", // Changed 拍摄操作超时 -> 操作超时
				operations_timeout_tooltip:
					"如果滤镜轮更换或中天翻转等操作耗时过长，则在放弃前等待的最长秒数。", // Corrected 放弃捕获之前 -> 放弃前

				force_dslr: "强制单反预设", // Force DSLR Preview/Preset
				image_viewer: "单反图像查看器", // Associated viewer for DSLRs

				sequence_focus: "序列中自动对焦", // Changed 序列中对焦 -> 序列中自动对焦
				hfr_threshold: "HFR 阈值修正", // Modifier for autofocus trigger threshold
				hfr_threshold_tooltip:
					"设置 HFR 阈值百分比增益。自动对焦完成后，最佳 HFR 值乘以 (1 + 此百分比) 并存储为新的触发阈值。如果启用了序列中自动对焦，则只有当当前测量的 HFR 超过此阈值时才会执行下一次自动对焦。增加此值可允许 HFR 有更大变化而无需触发对焦。", // Clarified calculation and purpose
				sequence_check: "序列中 HFR 检查", // Check HFR every N frames
				sequence_check_tooltip: "在拍摄 N 张图像后进行序列内 HFR 检查。", // Changed 多张图像 -> N 张图像

				median: "使用中值对焦", // Use median HFR instead of single best for threshold
				median_tooltip:
					"计算每次自动对焦操作完成后的焦点中值。如果自动对焦结果随着时间的推移而逐渐变差，中值应反映这一趋势，并在视觉条件恶化时防止不必要的自动对焦操作。", // "seeing conditions" -> 视觉条件
				save_sequence: "保存序列 HFR 阈值到文件", // Changed 序列HFR保存到文件中 -> 保存序列 HFR 阈值到文件
				save_sequence_tooltip:
					"HFR 阈值控制自动对焦何时启动。如果测量的 HFR 超过阈值，则启动自动对焦。如果初始阈值为零（默认），则使用首次自动对焦的最佳 HFR 值（应用修正百分比后）来设置新阈值。此新阈值用于后续检查。如果启用此选项，HFR 阈值将持久化并保存到序列文件中。", // Clarified HFR threshold usage and persistence
			},
		},
		capture_presets: {
			heading: "预设",
		},
		capture_limits: {
			// Limits for triggering actions (Focus, Guiding checks)
			heading: "限制设置",
			guiding_deviation: "导星误差 <", // Guide deviation limit
			guiding_deviation_unit: '"', // Arcseconds
			focus_hfr: "若 HFR > 则自动对焦", // Changed 自动对焦如果HFR > -> 若 HFR > 则自动对焦
			focus_hfr_unit: "像素", // Pixels
			focus_deltaT: "若 ΔT° > 则自动对焦", // Changed 自动对焦如果ΔT° > -> 若 ΔT° > 则自动对焦
			focus_deltaT_unit: "°C", // Celsius
			refocus_n: "每隔", // Changed 重新对焦每 -> 每隔
			refocus_n_unit: "分钟重新对焦", // Changed 分 -> 分钟重新对焦
			refocus_on_hfr: "基于 HFR 重新对焦", // Changed HFR重新对焦 -> 基于 HFR 重新对焦
			refocus_meridian: "中天翻转后重新对焦",
			check_every: "检查频率", // Changed 每次都检查 -> 检查频率
			about_guide_deviation: "关于导星误差 >", // Changed 关于如果导星误差> -> 关于导星误差 >
			start_deviation: "仅在导星误差 < 时启动", // Changed 只有在导星出现误差时才启动< -> 仅在导星误差 < 时启动
			guide_deviation: "导星误差",
			consecutive_times: "连续次数",
			dither_job: "每任务后抖动", // Changed 每个任务后都抖动 -> 每任务后抖动
		},
		capture_filters: {
			// Filter Wheel Settings
			heading: "滤镜轮设置",
			auto_focus: "自动对焦", // Per-filter focus offsets/triggers
			lock_filter: "锁定滤镜", // Prevent filter changes
			no_filters: "未发现可用滤镜！",
		},
		targets_filters: {
			// Filters in the Target selection module
			object_type: "目标类型",
			alt: "高度角", // Changed Alt -> 高度角
		},
		capture_auto_calibration: {
			// Automated Flats/Darks generation
			heading: "自动校准",
			flat_source: "平场源", // e.g., Dust Cap, Wall, Sky
			flat_duration: "平场曝光时间",
			dust_builtin: "内置平场灯的防尘盖", // Changed 镜头盖 -> 防尘盖
			dust_external: "外置平场灯的防尘盖", // Changed 镜头盖 -> 防尘盖
			wall: "墙", // Using a wall as flat source
			az: "方位角", // Azimuth for sky flats
			adu: "目标 ADU", // Target Average ADU for flats (changed ADU -> 目标 ADU)
			tolerance: "容差 (%)", // ADU Tolerance (added %)
			park_mount: "停放赤道仪", // Changed 赤道仪停放 -> 停放赤道仪
			park_dome: "归位圆顶", // Changed 归位穹顶 -> 归位圆顶
			pre_actions: "校准前动作", // Changed 校准前置准备 -> 校准前动作
		},
		capture_file: {
			// File Naming and Saving Settings
			filename: "文件名",
			heading: "文件设置",
			prefix: "前缀",
			script: "脚本", // Post-capture script
			directory: "目录",
			ts: "时间戳", // Timestamp format/option
			duration: "持续时间", // Exposure duration in filename
			suffix: "后缀", // File suffix (sequence number settings)
			usb: "USB 驱动器卸载成功", // Changed USB 成功卸载 -> USB 驱动器卸载成功
			unmount: "卸载", // Unmount USB drive
		},
		collapse_dome: {
			// Dome Control Module
			heading: "圆顶", // Changed 穹顶 -> 圆顶
			cap: "盖板", // Changed 窗口 -> 盖板 (Dust cap / Shutter Cap)
			dome: "圆顶",
			shutter: "快门",
			dome_slaving: "圆顶随动", // Dome follows telescope
			params: "参数", // Geometry parameters
			measurements: "测量值", // Geometry measurements
			autosync_threshold: "自动同步阈值 (度)",
			radius: "半径 (米)",
			shutter_width: "快门宽度 (米)",
			n_displacement: "北向位移 (米)", // Changed 北方向偏移 -> 北向位移
			e_displacement: "东向位移 (米)", // Changed 东方向偏移 -> 东向位移
			up_displacement: "向上位移 (米)", // Changed 朝上偏移 -> 向上位移
			ota_offset: "OTA 偏移 (米)", // Offset from mount axis to OTA axis
		},
		collapse_focus: {
			// Focusing Module
			heading: "调焦",
			hfr: "半峰全宽 (HFR)", // Changed 半高全宽 -> 半峰全宽 (Half Flux Radius)
			hfr_plot: "HFR 图",
			focus_in: "向内调焦",
			focus_out: "向外调焦",
			steps: "步数",
			advisor: "对焦顾问", // Focus Advisor tool
			update_parameters: "根据当前相机和望远镜优化对焦参数。",
			// Advisor step
			find_stars:
				"选中以让对焦顾问搜索星点。如果您已足够接近焦点，能在聚焦框中看到清晰的星点，则无需此步。", // Changed 这一步是没有必要的 -> 则无需此步
			// Advisor step
			coarse_adjustment:
				"选中以让对焦顾问找到粗略的焦点位置。这将找到一个足够好的近似焦点位置，以便运行自动对焦。",
			// Advisor step
			fine_adjustment: "选中以让对焦顾问运行自动对焦，以微调焦点。", // Changed 对焦点参数进行微调 -> 微调焦点
			settings: {
				// Autofocus Settings
				suspend_guiding: "暂停导星",
				auto_select_star: "自动选星",
				subframe: "子帧", // Use subframe for focusing
				fullfield: "全视场", // Use full field for focusing
				dark: "暗场帧", // Use dark frame for focusing
				annulus: "环形", // Annulus background subtraction
				mask: "掩膜", // Apply mask (e.g., Bahtinov)
				stars: "使用所有星点进行对焦", // Use multiple stars
				ring: "环形掩膜", // Type of mask
				adaptive: "自适应", // Adaptive focusing algorithm?
				min_move: "最小移动", // Minimum focuser move
				start: "自适应起始位置", // Start position for adaptive algorithm
				max_move: "最大总移动", // Maximum focuser travel during AF
			},
			process: {
				// Autofocus Process Settings
				title: "处理",
				detection: "探测", // Star detection method
				algorithm: "算法", // e.g., SEP, Threshold
				threshold: "阈值", // Detection threshold
				effect: "效果", // e.g., Sharpen, Blur
				average_over: "平均帧数", // Changed 平均 -> 平均帧数
				kernel_size: "核大小", // For filtering/detection
				num_of_rows: "行数", // For SEP background mesh
				sigma: "Sigma", // For SEP or thresholding
				curve_fit: "曲线拟合", // Algorithm for fitting V-curve (e.g., Parabolic, Hyperbolic)
				limit: "限制", // Limit search range?
				average_hfr: "平均 HFR 检查", // Check average HFR?
				donut_buster: "消除环状星点", // Changed 消除甜甜圈效应 -> 消除环状星点 (Donut stars when out of focus)
				scan_pos: "扫描起始位置", // Initial positions for AF scan
				datapoints: "数据点数量", // Number of points for V-curve
				initial_size: "初始步长 x", // Initial step size multiplier?
				use_weights: "使用权重", // Weight data points for curve fit
				refine_curve: "优化曲线拟合", // Refine fit near minimum
				time_dilation: "时间扩展 x", // Pause factor?
				outlier_rejection: "异常值剔除", // Reject bad HFR points
			},
			donut_buster: {
				// Donut Buster Specific Settings
				title: "环状星点消除器", // Changed Donut Buster -> 环状星点消除器
				always_on: "始终开启", // Changed 保持开启 -> 始终开启
			},
			mechanics: {
				// Focuser Mechanics Settings
				title: "机械",
				initial_step_size: "初始步长",
				max_travel: "最大行程", // Changed 最大移动范围 -> 最大行程
				max_step_size: "最大步长",
				backlash: "反冲补偿", // Changed 背隙 -> 反冲补偿 (Backlash Compensation)
				out_step_multiple: "向外步长倍数", // Multiplier for outward moves (backlash)
				number_steps: "步数", // Number of backlash steps
				af_overscan: "自动对焦过扫描", // Changed AF过扫描 -> 自动对焦过扫描 (Go past minimum and come back)
				capture_timeout: "拍摄超时",
				motion_timeout: "移动超时", // Changed 动作超时 -> 移动超时
				overscan_delay: "过扫描延迟",
			},
		},
		collapse_guide: {
			// Guiding Module
			total_rms_plot: "RMS 图",
			scope_primary: "主镜", // Guiding through primary scope (OAG)
			guidingRate: "导星速率", // Mount guiding rate (e.g., 0.5x sidereal)
			via: "通过", // Guide device (Mount, ST4, AO)
			box: "方框", // Size of guide star box
			effects: "效果", // Image effects (e.g., Dark subtract, Defect map)
			dither: "抖动", // Dithering settings
			frequency: "频率", // Or 模式 (e.g., Random, Spiral)
			every: "每", // Dither every N frames
			frames: "帧", // Unit
			gpg: "GPG", // Predictive Guiding? (Usually PPEC or similar)
			directions: "方向", // Axis directions (N/S/E/W)
			dec: "赤纬", // Declination Axis
			swap: "交换", // Swap DEC directions
			east: "+", // East guide pulse direction
			west: "-", // West guide pulse direction
			north: "+", // North guide pulse direction
			south: "-", // South guide pulse direction
			subframe: "子帧", // Use subframe for guiding
			autostar: "自动选星", // Auto-select guide star
			aggressiveness: "修正强度 (%)", // Changed 修正强度 -> 修正强度 (%)
			rarms: '赤经 RMS (")', // RA RMS error (arcsec) - changed （RMS）" -> RMS (")
			derms: '赤纬 RMS (")', // DEC RMS error (arcsec) - changed （RMS）" -> RMS (")
			totalrms: '总计 RMS (")', // Total RMS error (arcsec) - changed （RMS）" -> RMS (")
			advanced: "高级", // Advanced settings
			clear_model: "清除校准模型", // Clear guiding calibration/model
			yAxis: "漂移 (角秒)", // Y-axis label for guide graph

			min_error: "最小误差 (角秒)", // Minimum error to trigger correction (changed " -> 角秒)
			max_response: "最大响应 (秒)", // Maximum correction pulse duration (changed " -> 秒)
		},
		collapse_observatory: {
			heading: "天文台", // Observatory Control (Roof, etc.)
		},
		collapse_polar: {
			// Polar Alignment Module (PAA)
			heading: "极轴校准", // Changed 极轴校正 -> 极轴校准
			mount_direction: "赤道仪转向", // Which way mount slews for PAA
			manual_slew: "手动旋转", // Use manual slewing instead of GOTO for PAA
			west: "西",
			east: "东",
			mount_rotation: "赤道仪回转角度", // Changed 赤道仪回转 -> 赤道仪回转角度
			refresh: "刷新", // Refresh PAA measurement
			fov_error: "无效：视场宽度必须大于 30 角分", // Changed 广度 -> 宽度, 30角分以上 -> 大于 30 角分
			polar_error: "极轴误差",
			az_error: "方位误差: ", // Changed AZ 错误 -> 方位误差
			al_error: "高度误差: ", // Changed AL 错误 -> 高度误差
		},
		collapse_sequence: {
			// Sequence Queue Module
			progress: "进度",
			sequence: "序列",
			overall_progress: "总进度",
			sequences: "所有序列",
			no_sequences: "无拍摄序列，您可以在相机设置中添加",
			alert_sequence_error_body: "保存序列文件时出错",
			alert_sequence_loading_body: "加载序列文件时出错",
			alert_sequence_delete_body: "删除序列文件时出错",
		},
		collapse_mount: {
			// Mount Control Module
			meridian_flip: "中天翻转", // Changed 子午线翻转 -> 中天翻转
			flip_if_ha: "若 HA >", // Hour Angle limit for flip
			flip_if_ha_unit: "°，则翻转", // Changed 进行翻转 -> 则翻转
			pierside: "指向", // Changed 立柱侧 -> 指向 (Pier side)
			auto_park: "自动停放", // Auto park settings
			auto_park_everyday: "每天", // Park at a specific time daily
			park_at: "停放于 (时间)", // Park at specific time (changed 停放于 -> 停放于 (时间))
			reset_options: "重置选项",
			min_alt: "最低高度角", // Changed 最小高度 -> 最低高度角
			max_alt: "最高高度角", // Changed 最大高度 -> 最高高度角
			enable_alt_limits: "启用高度角限制", // Changed 高度限制 -> 高度角限制
			enable_ha_limits: "启用赤经时角限制", // Changed HA限制 -> 赤经时角限制
			max_ha: "最大赤经时角 (小时)", // Changed 最大HA（小时） -> 最大赤经时角 (小时)
			clear_model: "清除模型", // Clear mount pointing model
			east: "东", // Pier East
			west: "西", // Pier West
			east_long: "东 (镜筒指向西)", // Changed 东（向西指） -> 东 (镜筒指向西)
			west_long: "西 (镜筒指向东)", // Changed 西（向东指） -> 西 (镜筒指向东)
			reverse_NS: "反转南北", // Changed 反转北/南 -> 反转南北
			reverse_WE: "反转东西", // Changed 反转西/东 -> 反转东西
			time_source: "时间源", // GPS, System, Manual
			location_source: "位置源", // GPS, System, Manual
			enter_coordinates: "输入坐标",
			select_target: "选择目标",
		},
		modal_add_to_seq: {
			heading: "添加到序列",
		},
		modal_goto_sync: {
			heading: "前往 & 同步", // Changed Goto&同步 -> 前往 & 同步
			category: "天体类型", // Changed 星体类型 -> 天体类型
		},
		mount_status_bar: {
			// Status bar elements
			ra: "赤经", // Changed RA -> 赤经
			de: "赤纬", // Changed DE -> 赤纬
			az: "方位角", // Changed AZ -> 方位角
			at: "高度角", // Changed AL -> 高度角 (AL usually means Altitude)
			ha: "时角", // Changed HA -> 时角 (Hour Angle)
		},
		camera_status_bar: {
			// Status bar elements
			bin: "合并", // Changed 像素合并 -> 合并 (Binning)
		},
		solution_bar: {
			// Plate Solving Solution Bar
			dra: "赤经偏差", // Delta RA
			dde: "赤纬偏差", // Delta DEC
			arcsec: '"', // Arcseconds unit
			pix: "像素", // Pixels unit
			rot: "旋转角", // Rotation angle
			fov: "视场", // Field of View
		},
		mount_overlay: {
			// Overlay on image showing mount coords
			right_asc: "赤经",
			declination: "赤纬",
		},
		histogram: {
			// Image Histogram
			mean: "均值",
			median: "中值",
			minimum: "最小值", // Changed 最小 -> 最小值
			maximum: "最大值", // Changed 最大 -> 最大值
			bit_depth: "位深",
			non_linear_histogram: "非线性直方图",
		},
		livestacking: {
			// Live Stacking Module
			auto_dark: "自动暗场", // Subtract master dark automatically
			plate_solve: "解析", // Align frames using plate solving
			background: "背景", // Background level adjustment
			saturation: "饱和度", // Color saturation adjustment
			contrast: "对比度", // Contrast adjustment
			sigma_clipping: "Sigma 裁切", // Changed Sigma滤波 -> Sigma 裁切 (Clipping)
			noImages: "未找到实时叠加图像",
			median_filter: "中值滤波",
		},
		scheduler: {
			// Scheduler Module
			scheduler: "调度器", // Changed 序列管理器 -> 调度器
			j2000: "J2000", // Epoch
			add_sequences: "添加序列",
			fits: "FITS 文件",
			priority: "优先级",
			profile: "配置文件",
			startupConditions: "启动条件",
			JobConstraints: "任务约束", // Changed 限制条件 -> 任务约束
			completionConditions: "完成条件",
			observatoryStartup: "天文台启动", // Changed 天文观测台启动 -> 天文台启动
			abortedJobManagement: "异常处理", // What to do if a job aborts
			observatoryShutdown: "天文台关闭", // Changed 天文观测台关闭 -> 天文台关闭
			alt: "高度角限制", // Changed 高度限制 -> 高度角限制
			moon: "月球最小间隔角", // Changed Moon min. sep -> 月球最小间隔角
			moon_max: "月球最大高度角", // Changed Moon max alt -> 月球最大高度角
			twilight: "晨昏蒙影限制", // Changed 日出日落时间限制 -> 晨昏蒙影限制 (Twilight)
			artifHorizon: "地平线限制", // Artificial Horizon / Altitude Limit Mask
			sequenceCompletion: "序列完成条件",
			repeatFor: "重复执行次数",
			repeatUntilTerminated: "重复直到终止",
			repeatUntil: "重复执行直到 (日期/时间)", // Changed 重复执行直到 -> 重复执行直到 (日期/时间)
			unparkDome: "解锁圆顶", // Changed 解锁天文馆穹顶限制 -> 解锁圆顶
			unparkMount: "解锁赤道仪", // Changed 解锁望远镜限制 -> 解锁赤道仪
			uncap: "打开盖板", // Changed 卸下镜头盖限制 -> 打开盖板
			warmCCD: "停止相机制冷", // Changed 相机预热限制 -> 停止相机制冷
			none: "无", // Changed 无优先级限制 -> 无 (e.g., for priority)
			queue: "队列模式", // Changed 序列模式 -> 队列模式
			immediate: "立即执行模式",
			rescheduleErrors: "失败后重新调度延迟", // Changed 重新排队等待时间 -> 失败后重新调度延迟
			no_jobs: "队列中没有任务",
			err_loading_folders: "加载文件夹时发生错误",
			err_loading_fits: "加载 .fits 文件时发生错误",
			err_delete_file: "删除文件时发生错误",
			add_job: "添加任务",
			start_jobs: "启动/停止任务", // Changed 启动和停止任务 -> 启动/停止任务
			culimination: "中天偏移", // Changed 天文望远镜最高点偏移 -> 中天偏移 (Culmination Offset)
			create_jobs: "创建任务",

			mosaic: {
				// Mosaic Planner
				import: "导入拼接图像",
				planner: "拼接规划器",
				mask: "马赛克蒙版", // Changed 马赛克图层 -> 马赛克蒙版 (Mosaic Mask/Overlay)
			},

			scheduler_settings: {
				// Scheduler Advanced Settings
				lead_time: "提前时间 (分钟)", // Changed 提前量 -> 提前时间 (分钟)
				lead_time_tooltip:
					"任务计划启动时间之前的缓冲时间（分钟）。调度器会提前启动任务以执行准备工作（如自动对焦、导星校准等），因为这些可能需要较长时间。", // Clarified purpose
				pre_dawn: "黎明前限制 (分钟)", // Changed 黎明前 -> 黎明前限制 (分钟)
				pre_dawn_tooltip: "禁止在天文黎明前 N 分钟内调度或执行任务。", // Clarified 'N'
				pre_emptive: "抢先关机 (小时)", // Changed 先发制人的停机 -> 抢先关机 (小时)
				pre_emptive_tooltip:
					"如果在 N 小时内没有安排序列任务，则执行完整的关机过程，并在下一个任务准备就绪后重新启动天文台操作。", // Clarified 'N'
				setting_altitude: "调度高度角截止 (度)", // Changed 设置高度截止 -> 调度高度角截止 (度)
				setting_altitude_tooltip:
					"禁止在低于此高度角 N 度以下调度任务。实际执行将持续到硬件高度角限制。", // Clarified scheduling vs execution limit
				weather_grace: "天气宽限期 (分钟)", // Changed Weather grace period -> 天气宽限期 (分钟)
				weather_grace_tooltip:
					"启用基于天气的调度：在天气警告或警报期间阻止新任务启动。现有任务在警告期间继续，但在警报期间中止。系统启动软关机并等待条件改善或宽限期到期，之后当前任务将被终止。",
				dusk_offset: "黄昏偏移 (小时)", // Changed 黄昏抵消 -> 黄昏偏移 (小时)
				dusk_offset_tooltip:
					"用 N 小时偏移天文黄昏。正值或负值可调整蒙影限制。", // Changed 这么多 -> N
				dawn_offset: "黎明偏移 (小时)", // Changed 黎明抵消 -> 黎明偏移 (小时)
				dawn_offset_tooltip:
					"用 N 小时偏移天文黎明。正值或负值可调整蒙影限制。", // Changed 这么多 -> N

				stop_ekos: "关机后停止 Ekos",
				stop_ekos_tooltip: "成功执行关闭程序后，停止 INDI 和 Ekos。",
				shutdown_script: "关机前执行脚本", // Changed 关机前中止INDI -> 关机前执行脚本 (More general)
				shutdown_script_tooltip:
					"如果关闭脚本会终止 INDI 服务器，请启用此选项，以免生成断开连接错误。",
				remember_job: "记住任务进度",
				remember_job_tooltip: "恢复调度任务时，从上次保存的图像继续序列。", // Changed 存储中的最后一张图像开始恢复序列 -> 上次保存的图像继续序列
				execute_job: "始终执行启动任务", // Startup tasks/scripts
				execute_job_tooltip:
					"天文台启动脚本通常仅在 Ekos 离线时执行。启用此选项，即可在调度器启动时始终执行它。", // Changed 随时启动它 -> 始终执行它

				greedy_schedule: "贪婪调度", // Changed 使用贪心调度 -> 贪婪调度
				greedy_schedule_tooltip:
					"启用时，调度器会在没有更高优先级任务可运行时尝试运行较低优先级的任务。建议启用。", // Changed 勾选 -> 启用

				reset_mount: "对准失败时重置赤道仪模型",
				reset_mount_tooltip: "对准失败时重置赤道仪指向模型。", // Clarified
				reset_mount_before: "每个任务开始前重置赤道仪模型",
				reset_mount_before_tooltip: "每个任务开始前重置赤道仪指向模型。", // Clarified
				force_realign: "重启任务前强制重新对准",
				force_realign_tooltip:
					"如果启用了对准功能，则调度器会在重新启动任何任务之前进行重新对准，即使导星也处于活动状态。",
				restart_align: "导星校准失败时重新对准", // Changed 重新开始对准 -> 重新对准
				restart_align_tooltip:
					"如果导星校准失败，则在继续导星重新校准之前重新执行对准过程。如果校准过程偏离了目标视场，这有助于重新居中。", // Corrected 目标物体的 -> 目标

				offsets: "偏移量", // Offset settings category
				clean_jobs: "清理与任务", // Cleanup and Job settings category
				alignment: "对准", // Alignment settings category

				verify_image: "每 N 张图像验证位置", // Changed 每隔一段时间验证捕获图像位置 -> 每 N 张图像验证位置
				verify_image_tooltip:
					"在捕获后进行位置解析，每 N 张图像执行一次。设置为 0 表示禁用。", // Changed 计算位置时 -> 进行位置解析
				reset_pipeline: "若验证位置偏差超过 N 角分则重置流程", // Changed 设定值 -> N 角分
				reset_pipeline_tooltip:
					"如果捕获图像的位置与目标位置偏差超过 N 角分，则中止捕获并重新执行流程（对准、对焦、导星等）。", // Changed 这么多角分钟 -> N 角分, 重新安排流程 -> 重新执行流程（对准、对焦、导星等）
				arcminutes: "角分", // Unit
			},
		},
		summary: {
			// Summary View
			empty: "没有可用的摘要数据",
			deviation: "偏差", // e.g., Guide deviation
			inactive: "非活动", // Module status
		},
	},
	optical_train: {
		// Optical Train Configuration
		optical_trains: "光路",
		telescope: "望远镜/镜头",
		create_new: "创建新光路", // Changed 创建新项目 -> 创建新光路
		dslr_lens: "单反相机镜头",
		reset_train: "重置光路", // Changed 重置模型 -> 重置光路
		focal_ratio: "焦比", // Changed 焦距比 -> 焦比 (f-ratio)
		guide_via: "导星途径",
		tooltip: {
			// Tooltip for Guide Via setting
			title: "选择接收导星校正脉冲的设备",
			subject: "可以是以下设备之一：",
			// Guide via Mount
			mount_device:
				"赤道仪：如果望远镜可以直接接收导星脉冲，则最好选择它。这是推荐选项。", // Clarified pulse destination
			// Guide via ST4 port on camera
			st4_device:
				"导星相机 (ST4)：如果在导星相机和望远镜之间使用 ST4 电缆连接，则应选择导星相机。", // Clarified connection
			// Guide via dedicated interface (e.g., GPUSB)
			dedicated_device:
				"专用导星接口：如果使用专用导星设备（例如 Shoestring GPUSB），则应选择该设备。", // Clarified device type
			dedicated: "专用", // Abbreviation for dedicated device
			// Filter wheel selection tooltip
			filterWheel:
				"选择一个滤镜轮。这必须是通过 USB 连接到 StellarMate 的独立滤镜轮。如果您的滤镜轮内置在相机中，请将此项留空。",
		},
	},
	status: {
		// System Status Module
		system: "系统",
		info: "信息",
		software: "软件",
		cpu: "CPU",
		ram: "RAM",
		storage: "存储",
		stable: "稳定版",
		beta: "测试版",
		wifi_network: "无线 IP",
		hotspot_network: "热点 IP",
		ethernet_network: "以太网 IP",
		model: "型号",
		version: "版本",
		hostname: "主机名",
		time: "时间",
		release_type: "版本类型", // Stable/Beta channel
		updates: "更新选项",
		hotspotMode: "热点模式",
		wifiNetwork: "无线网络", // Changed Wifi网络 -> 无线网络
		wifiCountry: "无线区域", // Changed WiFi国家类型 -> 无线区域 (Regulatory domain)

		wifiBand: "无线频段", // Changed WiFi带宽 -> 无线频段 (2.4GHz/5GHz)
		update_available: "有可用更新", // Changed 可用更新 -> 有可用更新
		update_unavailable: "暂无可用更新", // Changed 暂不可用更新 -> 暂无可用更新
		update_in_progress: "更新中",
		btn_vnc: "远程桌面 (VNC)",
		btn_web_manager: "Web 客户端",
		btn_restart: "重启",
		btn_shutdown: "关机",
		btn_manage_wifi: "更改网络",
		btn_enable_direct_ethernet: "启用直连以太网", // Changed 启用以太网 -> 启用直连以太网
		btn_disable_direct_ethernet: "禁用直连以太网", // Changed 禁用以太网 -> 禁用直连以太网
		btn_enable_hotspot: "启用热点",
		btn_disable_hotspot: "禁用热点",
		btn_change_hostname: "更改主机名",
		btn_check_for_updates: "检查更新",
		btn_update_now: "立即更新",
		btn_update_in_progress: "更新中...",
		btn_factory_reset: "恢复出厂设置",
		btn_change_resolution: "更改分辨率", // Changed 变更协议 -> 更改分辨率
		btn_later: "稍后",
		btn_resize_fs: "调整 SD 卡分区", // Changed 重置SD卡 -> 调整 SD 卡分区 (Resize Filesystem)
		btn_continue: "继续",
		information_ekos_offline:
			"Ekos 离线。请直接启动设备配置文件或通过调度器启动。", // Changed 计划程序 -> 调度器
		no_camera_detected: "未选择相机或相机已离线", // Changed 没有相机被选择或者相机已离线 -> 未选择相机或相机已离线

		alert_device_offline_title: "设备已离线",
		alert_device_offline_body: "设备似乎已离线。是否要登录以激活？",
		alert_restart_title: "重启 StellarMate",
		alert_restart_body: "您的设备即将重启。重启后请尝试重新连接。", // Changed 再次连接 -> 重新连接
		alert_shutdown_title: "关闭 StellarMate",
		alert_shutdown_body: "您的设备即将关闭。重新使用需要手动开启电源。", // Clarified manual power on
		alert_resize_title: "调整 microSD 卡大小", // Changed 重置 -> 调整
		alert_resize_body:
			"StellarMate 将扩展文件系统以使用全部 SD 卡容量。请重启 StellarMate。", // Clarified filesystem expansion
		alert_resize_btn_resize: "调整大小", // Changed 重置大小 -> 调整大小
		alert_hotspot_enable_title: "启用热点",
		alert_hotspot_enable_body:
			"启用热点将使 StellarMate 断开当前连接的 WiFi 网络，并启动自己的热点。您需要连接到此热点网络才能继续使用 StellarMate。是否继续？", // Clarified disconnection
		alert_hotspot_post_enable_title: "请连接到热点",
		alert_hotspot_post_enable_body:
			"您现在可以连接到“stellarmate”热点。连接后，请点击“确认”以继续。", // Added "确认" button reference
		alert_hotspot_disable_body:
			"禁用热点将使 StellarMate 尝试连接到其先前连接过的无线网络。热点禁用后，您需要在同一网络才能继续使用 StellarMate。是否继续？", // Clarified reconnection attempt
		alert_factory_reset_body: "恢复出厂设置完成。请立即重启 StellarMate。",
		alert_factory_reset_confirmation_body:
			"您确定要将设备恢复到出厂设置吗？所有设置都将被清除。此操作不可逆转！",
		alert_forget_wifi_title: "忘记 WiFi 网络", // Changed 删除Wifi -> 忘记 WiFi 网络
		alert_forget_wifi_body:
			"断开并忘记当前 WiFi 网络将使 StellarMate 启用自己的热点（如果未连接到以太网）。您将需要连接到此热点才能继续使用。是否继续？", // Clarified "forget" action
		alert_join_wifi_title: "加入 WiFi 网络",
		alert_join_wifi_body:
			"加入 WiFi 网络将关闭 StellarMate 的热点（如果已启动）。若要继续使用 StellarMate，请确保您的控制设备在同一网络上。是否继续？", // Clarified control device network
		alert_change_resolution_title: "成功！",
		alert_change_resolution_body:
			"分辨率已更改。您现在可以重启 StellarMate 使变更生效。", // Clarified resolution change
		alert_change_release_title: "切换到测试频道", // Changed 测试频道 -> 切换到测试频道
		alert_change_release_body:
			"您确定要切换到不稳定且可能不受支持的测试版渠道吗？", // Clarified instability
		alert_direct_ethernet_title: "直连以太网",
		alert_direct_ethernet_connect_body:
			"请使用以太网电缆直接连接 StellarMate 和您的 PC。将您的 PC 的 IP 地址设置为 192.168.100.2，子网掩码设置为 255.255.255.0，网关设置为 192.168.100.1。", // Added Subnet Mask
		alert_direct_ethernet_disconnect_body: "请断开直连以太网电缆。",
		alert_clear_all_driver_config_title: "清除所有驱动程序配置",
		alert_clear_all_driver_config_body: "您确定要删除所有驱动程序配置吗？",
		alert_update_complete_title: "SM 操作系统更新",
		alert_update_complete_body: "更新完成。请重新启动 StellarMate。",
		alert_network_error_title: "网络错误",
		alert_network_error_body: "无法查询网络信息",
		alert_delete_directory_message: "您确定要删除 {0} 目录及其下所有文件吗？", // Keeping placeholder
		alert_permission_title: "位置权限",
		alert_permission_description:
			"StellarMate App 需要位置信息以将 StellarMate 设备位置与 App 位置同步。是否允许？", // Changed 您要继续吗 -> 是否允许
		alert_remote_isactive:
			"无法检查远程支持状态。您的 StellarMate OS 是否已更新到最新版本？", // Changed 是否激活 -> 状态, Stellarmate -> StellarMate, 是否已经更新 -> 是否已更新到最新版本
		alert_remote_start: "无法启动远程支持：",
		alert_remote_stop: "无法停止远程支持：",
		alert_remote_id: "无法找到远程支持 ID",
		alert_remote_failed: "无法获取远程支持 ID：",
		alert_remote_not_found: "未发现远程支持实例：", // Changed 未发现远程支持 -> 未发现远程支持实例
		alert_permission_denied: "权限被拒绝",
		alert_permission_blocked: "权限被阻止（请在系统设置中授予）", // Added hint
		alert_grant_camera_permission: "您需要首先授予相机权限",
		alert_feature_not_available: "此功能当前不可用", // Changed 此功能不可用 -> 此功能当前不可用

		alert_logout_account_body: "您确定要注销吗？",
		alert_reset_ekoslive_title: "重置 EkosLive",
		alert_reset_ekoslive_body:
			"您确定要重置 EkosLive 吗？这将删除所有缓存的图像并重新启动服务器。",
		alert_download_index_file: "缺少 Astrometry 解析索引文件。是否要下载？",
		alert_low_space: "您的设备存储空间不足。请清理不需要的文件。", // Changed 即将爆炸 -> 不足

		change_resolution_modal: {
			mode: "模式", // Or 分辨率
		},
		change_hostname_modal: {
			new_hostname: "新主机名",
		},
		change_wifi_modal: {
			heading: "加入网络",
			ssid: "SSID", // Network Name
			err_wifi: "搜寻 WiFi 网络时出错，请重试。", // Changed Wifi -> WiFi 网络, 遇到了问题 -> 出错
		},
		change_band_modal: {
			heading: "修改频段", // Changed 带宽 -> 频段
			band: "频段", // Changed 带宽 -> 频段
			channel: "信道",
		},
		vnc_view: {
			heading: "远程桌面 (VNC)",
			alert_unreachable_title: "VNC 无法访问",
			alert_unreachable_body: "尝试连接 VNC 服务器时出错，请重试。", // Changed 似乎遇到了问题 -> 出错
		},
		web_manager_view: {
			alert_unreachable_title: "网页客户端无法访问",
			alert_unreachable_body: "尝试连接网页客户端时出错，请重试。", // Changed 似乎遇到了问题 -> 出错
		},
	},
	settings: {
		// App Settings
		heading: "设置",
		language: "语言",
		high_bandwidth: "高带宽模式",
		transfer_images: "传输图像", // Transfer images from SM to App
		notifications: "通知",
		sounds: "声音",
		cloud_storage: "云存储",
		limit_cloud_storage:
			"存储空间有限。升级到 Pro/Ultimate 可获得高达 10GB/1000GB 的存储空间。",
		auto_sync: "自动同步", // Auto-sync settings/data
		location: "位置",
		reset_app: "重置应用", // Reset App to defaults (changed App -> 应用)
		reset_app_body: "确定要清除所有应用设置吗？", // Changed 应用程序 -> 应用
		metric: "公制", // Units
		imperial: "英制", // Units
		file_logging: "文件日志记录", // Enable logging to file
		alert_delete_account_title: "删除账户",
		alert_delete_account_body: "您确定要删除您的账户吗？此操作不可撤销。", // Added irreversibility warning
		color_scheme_sky_map: "星图配色", // Changed 星图规划 -> 星图配色
		last_synced: "上次同步时间",
		sync_all: "同步所有数据",
		pro_feature: "Pro 功能",
	},
	cloud: {
		// Cloud Storage / EkosLive Viewer
		heading: "云服务",
		btn_filters: "筛选",
		btn_gallery: "图库",
		btn_offline_viewer: "离线查看器", // View locally stored images
		btn_cloud_viewer: "云端查看器", // View images stored in cloud
		no_images_title: "找不到图像",
		enable_cloud:
			"要开始将序列图像上传到云端，请在设置中启用 EkosLive 云上传。", // Clarified sequence images and EkosLive cloud upload setting
		no_images_body: "请尝试更改筛选条件",
		no_selected_title: "没有选择图像",
		no_selected_body: "请从图库中选择一张图片", // Changed 从图库中选择一张图片 -> 请从图库中选择一张图片
		cloud_disabled_title: "云服务已禁用",
		cloud_disabled_body: "请转到设置并启用云服务以访问此选项卡",
		pro_plan_body: "云存储仅适用于 Pro/Ultimate 用户。", // Changed 高级 -> Pro/Ultimate
		reset_ekoslive: "重置 EkosLive",
		alert_cannot_download_title: "无法下载",
		alert_cannot_download_body: "尝试下载时出错，请重试",
		alert_confirm_delete_title: "是否确定?",
		alert_confirm_delete_body: "真的要删除 {0} 吗？删除后数据将无法恢复", // Keeping placeholder
		filters_drawer: {
			// Filtering options
			field: "字段", // Changed 域 -> 字段
			condition: "条件",
			value: "值",
			btn_add_filter: "添加筛选条件",
			airmass: "大气质量", // Changed 大气光学质量 -> 大气质量 (Airmass)
			object: "对象",
			contains: "包含", // Condition
		},
		gallery_drawer: {
			// Gallery view controls
			all: "全部",
			h1: "1 小时", // Changed 1h -> 1 小时
			h24: "1 天", // Changed 1d -> 1 天
			d7: "7 天", // Changed 7d -> 7 天
			m1: "1 月", // Changed 1m -> 1 月
			y1: "1 年", // Changed 1y -> 1 年
			images: "图像",
			btn_sort: "排序", // Changed 分类 -> 排序
			btn_delete_all: "全部删除",
			ascending: "升序",
			descending: "降序",
			alert_no_images_title: "无图像",
			alert_no_images_body: "没有可以删除的图像",
			alert_delete_all_body: "确定删除选定的 {0} 张图片吗? 此操作无法恢复", // Keeping placeholder
			transfer_successful: "图像传输成功",
		},
		info_drawer: {
			// Image Information Panel
			add_tags_here: "在此处添加标签",
			captured_on: "拍摄于", // Changed 已捕获 -> 拍摄于
		},
	},
	about: {
		// About Screen
		heading: "关于",
		bundle: "软件包版本", // Changed 软件包 -> 软件包版本
		copyright_line1: "StellarMate 由 Ikarus Technologies 开发。© 2017-2024",
		copyright_line2: "背景图像来自 Alamri 天文台", // Changed 背景来自 -> 背景图像来自
		credits: {
			heading: "鸣谢", // Changed 感谢 -> 鸣谢
			title: "翻译",
			name: "翻译者",
		},
	},
	messages: {
		// General UI messages
		// Idle message in PAA module
		polar_idle:
			"此工具提供了一种简单的极轴校准方法。将望远镜指向靠近天极的位置并做好平衡。选择合适的方向和速度，然后点击“开始”。如果您无法看到北极星（或南极星），请使用星图或 Ekos 控制器将望远镜指向靠近子午线的任意位置，选择东或西方向，必要时减小旋转角度，然后单击“开始”。", // Clarified celestial pole, Polaris/Sigma Octantis, Meridian. Changed 天顶极Home位置 -> 靠近天极的位置
		alert_directions_not_found:
			"未找到坐标。请选定目标并手动输入坐标，或执行解析。", // Added "执行解析" option
		manual_rotator: "按指示角度旋转相机，然后拍摄新图像以更新当前位置角。", // Changed 拍摄图像 -> 拍摄新图像, 位置角度 -> 当前位置角
		welcome: "欢迎使用 StellarMate",
		no_logs: "未找到 {0} 的日志", // Keeping placeholder
		mount_set: "已将当前位置设置为归位位置", // Changed 将当前位置设置为归位位置 -> 已将当前位置设置为归位位置
	},
	ekosLivePro: {
		// EkosLive Pro specific features
		pushNotification: "推送通知",
		level: "通知级别", // e.g., Info, Warning, Error
		settings: "EkosLive Pro 设置",
	},
	skymap: {
		// Sky Map specific terms
		goto: "前往", // Changed Goto -> 前往
	},

	device: {
		// Device specific controls/info (likely in Status or dedicated tab)
		mirror: "镜像外部显示器",
		monitor_successful: "StellarMate 显示器设置已成功更改！", // Changed 监视器显示设置成功更改 -> 显示器设置已成功更改
		monitor_failed: "无法设置 StellarMate 显示器。请稍后再试！", // Changed SM X 监视器显示 -> StellarMate 显示器
		undefined_error: "发生未知错误", // Changed 错误未定义 -> 发生未知错误
		share: "分享日志",
		logs: "日志",
		logs_upload: "日志已成功上传至 StellarMate 支持。",
		error_upload: "上传日志时出错",
		reset_network: "重置网络设置", // Changed 重置网络 -> 重置网络设置
		release_notes: "发行说明",

		vnc: {
			// VNC specific settings
			update_password: "更新 VNC 密码",
			scaling: "缩放模式", // Changed 缩放 -> 缩放模式 (e.g., Scaled, Full Size)
		},
	},

	controller: {
		// Hardware Controller (like StellarMate Controller) specific terms
		dc_power: "12V 直流电源",
		heaters: "加热带", // Changed 加热器 -> 加热带 (Dew Heaters)
		varOutput: "可变输出", // Variable DC output
		reports: "报告", // Power/Sensor reports
		voltage: "电压",
		current: "电流",
		power: "功率",
		active_antenna: "有源天线", // Active GPS Antenna
		passive_antenna: "无源天线", // Passive GPS Antenna
		power_sleep: "电源处于睡眠模式。点击唤醒。",
		power_off: "断开时关闭电源", // Changed 关机 -> 断开时关闭电源
		power_off_tooltip: "断开设备配置文件时，关闭所有端口的电源。",
		leds: "LED 灯",
		auto_dew: "自动除露", // Changed 自动防露 -> 自动除露
		auto_dew1_threshold: "加热带 1 阈值 (°C / %RH)", // Added units clarification
		auto_dew2_threshold: "加热带 2 阈值 (°C / %RH)", // Added units clarification
		stepper: "步进电机", // Stepper motor controller (for focusers etc.)
		buzzer: "蜂鸣器",
		sensors: "传感器", // Temperature, Humidity etc.
		alert_power_port_description: "您确定要关闭端口 {0} 吗？", // Keeping placeholder
	},
	notifications: {
		// App Notifications
		read_all: "全部标记为已读",
		dnd: "勿扰模式",
		ekoslive_successful: "EkosLive 重置成功",
		ekoslive_restart: "重启 EkosLive",
		usb_reset: "USB 重置成功",
		feedback: "反馈",
		stella_feedback_optional: "(可选) 请提供更多详细信息。", // Changed 欢迎添加 -> 请提供
		stella_feedback: "反馈提交成功。",
		stella_feedback_placeholder: "请提供额外的反馈",
		stella_prompt_request: "Stella 请求处理成功",
		stella_xml_failure: "生成 XML 失败",
		stella_history_success: "历史记录删除成功。",
		stella_history_failure: "删除历史记录时出错",
		train_refresh: "光路记录刷新成功", // Changed 训练记录 -> 光路记录
	},
	hardware: {
		// Hardware Setup/Detection
		serial_devices_detected: "发现串口设备",
		serial_port: "串口",
	},
	tabs: {
		// Main Navigation Tabs
		setup: "配置", // Or 设置
		ekos: "Ekos",
		sky: "星图", // Changed 天空 -> 星图
		targets: "目标",
		device: "设备", // Or 状态
		stella: "Stella", // AI Assistant Tab
	},
	stella: {
		// Stella AI Assistant specific texts
		confirm_train_settings:
			"缺少拍摄设置，无法创建 XML 文件。请启动 Ekos 以同步设置。", // Clarified XML cannot be created without settings
		confirm_ekos_running: "请检查 Ekos 配置文件状态。Ekos 必须在线才能继续。", // Clarified online status needed
		confirm_ekos_running_question:
			"此功能需要 Ekos 配置文件正在运行。是否要启动默认配置文件？", // Clarified profile needed
		action_in_progress: "操作正在进行中...",
		action_completed: "操作成功完成。",
		confirm: "确认响应", // Confirm Stella's proposed action
		narrate: "朗读响应", // Changed 叙述响应 -> 朗读响应 (Text-to-speech)
		notifications: {
			// Stella specific notifications
			objects: "Stella 发现了一些有趣的天体",
			failed:
				"这次 Stella 没有找到任何结果。您可以尝试放宽搜索条件或调整筛选器吗？", // Changed 东西 -> 结果
			pending: "处理中...",
			XML: {
				pending: "正在生成 XML...",
				error: "XML 生成失败",
				success: "XML 生成成功",
			},
			image: {
				pending: "图像处理中...",
				error: "图像处理错误",
				success: "图像处理成功",
			},
		},

		targets: {
			// Example prompts for finding targets
			example: "使用 Stella AI 筛选目标。以下是一些示例：",
			galaxies: "1. 查找当前高度角超过 30 度的所有星系", // Changed 北方高度 -> 当前高度角
			nebulae: "2. 查找角大小介于 1 到 3 度之间的所有星云", // Added 角大小
			comets: "3. 查找当前高度角超过 40 度且我的相机视场可以容纳的所有彗星", // Changed 高度 -> 当前高度角, 可以观测到 -> 视场可以容纳
		},
		view: {
			// Example prompts for viewing images
			example: "使用 Stella AI 筛选图像。以下是一些示例：",
			filter: "1. 筛选使用红色滤镜拍摄的图像", // Added 拍摄
			show_images: "2. 显示我在 5 月 25 日拍摄的图像",
			show_messier: "3. 显示 M31 的图像", // Changed M 31 -> M31
		},
	},
	social: {
		// Social / Community Features
		social_profile: "社交资料",
		captures: "拍摄记录", // Changed 捕获 -> 拍摄记录
		followers: "关注者",
		subscriptions: "订阅",
		following: "关注中",
		follow: "关注",
		unfollow: "取消关注",
		report_abuse: {
			// Report Abuse reasons
			title: "举报滥用",
			description: "请说明举报滥用的原因。",
			reason: {
				spam: "垃圾信息：内容充满了无关或重复的信息。", // Added prefix
				hate_speech: "仇恨言论：内容包含种族主义、性别歧视或其他歧视性语言。", // Added prefix
				inappropriate_content: "不当内容：帖子包含露骨、不当或 NSFW 材料。", // Added prefix
				impersonation: "身份冒用：用户假冒他人。", // Added prefix
				violation_of_terms: "违反条款：内容违反了平台的服务条款或社区准则。", // Added prefix
				privacy_violation: "侵犯隐私：内容未经同意包含个人信息。", // Added prefix
				wrong_image: "图像错误：图像与描述不符。", // Added prefix and clarification
				wrong_metadata: "元数据错误：元数据不正确或具有误导性。", // Added prefix and clarification
			},
		},
		comment: {
			comments: "评论",
			no_comment: "暂无评论。",
		},
		new_post: "新帖子",
		public_directory: "公共目录",
		community: "社区",
		no_observatories: "未找到公共天文台。",
		fine_location: "精确位置",
		coarse_location: "大致位置",
	},
	menu: {
		// User Menu Items
		go_to_profile: "个人资料",
		go_to_equipment: "设备",
		go_to_moderation: "管理", // Moderation tools
		manage_subscriptions: "订阅管理",
		go_to_dashboard: "仪表板",
	},
	wizard: {
		// Setup Wizard questions
		software_title: "您主要使用哪款成像软件？", // Changed 您使用的是哪个成像软件 -> 您主要使用哪款成像软件？
		hardware_title: "您使用哪些硬件平台？", // Changed 您使用的是哪些硬件平台 -> 您使用哪些硬件平台？
		imaging_title: "您喜欢拍摄哪些类型的天体？", // Changed 您喜欢拍摄什么 -> 您喜欢拍摄哪些类型的天体？
	},
	ekoslive: {
		// EkosLive specific UI elements
		info: {
			drag: "将文件拖放到此处，或点击以选择文件",
			selected: "文件已被选中",
		},
	},
};

export default cn;
