const es = {
	general: {
		home: "Inicio",
		next: "Siguiente",
		ok: "OK",
		done: "Hecho",
		cancel: "Cancelar",
		confirm: "Confirm",
		apply: "Aplicar",
		enter: "Enter",
		scan: "Scan",
		save: "Salvar",
		save_as: "Save as",
		overwrite: "Overwrite",
		select: "Seleccionar",
		hardware: "Hardware",
		signal: "Signal",
		usb: "USB",
		devices: "Devices",
		connect: "Conectar",
		disconnect: "Desconectar",
		schedule: "Schedule",
		yes: "Si",
		no: "No",
		ignore: "Ignore",
		error: "Error",
		back: "Regresar",
		delete: "Borrar",
		remove: "Eliminar",
		online: "Conectado",
		offline: "Desconectado",
		cloud: "Cloud",
		remote: "Remoto",
		preset: "Preajuste",
		camera: "Camara",
		focuser: "Enfocador",
		filter_wheel: "Rueda de filtros",
		filter: "Filtro",
		exposure: "Exposicion",
		binning: "Binning",
		action: "Accion",
		scope_type: "Tipos de Telescopio",
		solver_type: "Soluciones",
		type: "Tipos",
		driver: "Driver",
		gain: "Ganancia",
		offset: "Compensacion",
		format: "Formato",
		iso: "ISO",
		count: "Contador",
		delay: "Retardo",
		status: "Estado",
		target: "Objetivo",
		angle: "Angulo",
		sep_profile: "Perfil SEP",
		direction: "Direccion",
		rotation: "Rotacion",
		automatic: "Automatico",
		manual: "Manual",
		progress: "Progress",
		position_angle: "PA",
		details: "Details",
		skip: "Skip",
		updated: "Updated",
		new: "New",
		remote_support: "Remote Support",
		logout: "Logout",
		setting: "Setting",
		hours: "Hours",
		minutes: "Minutes",
		seconds: "Seconds",

		azimuth: "Azimut",
		altitude: "Altitud",
		tags: "Etiquetas",
		filename: "Nombre fichero",
		size: "Capacidad",
		frame: "Frame",
		temperature: "Temperatura",
		name: "Nombre",
		date: "Fecha",
		resolution: "Resolucion",
		monitor: "Monitor",
		clear_all: "Clear All",
		pixels: "Pixels",

		select_file: "Select file",
		select_folder: "Select folder",
		selected_dir: "selected folder",
		new_folder: "Enter new folder name",
		create_new_folder: "Create new folder in",
		empty_folder: "Folder is Empty",

		train: "Train",
		no_data_found: "No data found",
		track: "Track",
		jobs: "Jobs",
		category: "Categories",
		profile: "Profile",
		arcmin: "arcmin",
		calculate: "Calculate",
		update: "Update",
		center: "Center",
		learn_more: "Learn more",

		// for dropdown
		select_option: "Seleccionar opcion...",
		search: "Buscar...",
		no_results: "Sin resultados",

		// for buttons/toggles
		on: "ON",
		off: "OFF",
		go: "IR",
		add: "AÑADIR",
		load: "Load",
		edit: "EDITAR",
		refresh: "REFRESCAR",
		reset: "REINICIAR",
		reset_all: "Reiniciar Todo",
		start: "Arrancar",
		stop: "Parar",
		stopping: "Parando",
		clear: "LIMPIAR",
		solve: "SOLUCIONAR",
		parked: "Aparcado",
		unparked: "No aparcado",
		open: "Abierto",
		close: "Cerrado",
		opened: "Abierto",

		// Confirm Delete Alert
		alert_confirm_delete_title: "Confirm Delete",
		alert_delete_profile_body:
			"Are you sure you want to delete the selected profile?",
		alert_delete_scope_body: "Are you sure you want to delete the selected scope?",

		// Confirm
		alert_confirmation_title: "Confirmation",
		alert_confirmation_body: "Are you sure you want to create {0} with this name?",
		alert_overwrite_body:
			"The file '{0}' already exists. Do you wish to overwrite it?",

		closed: "Cerrado",
		enable: "Halibilitado",
		disable: "Deshabilitado",
		select_time: "Seleccionar Hora",
		set: "Ajustar",
		logging: "Logging",
		drivers: "Drivers",
		network: "Network",

		// error messages
		network_error:
			"Por favor, asegurese que su StellarMate esta conectado a tu red",
		internet_required: "Por favor, asegurese que tiene conexion a internet",
		alert_comm_error_title: "Fallo de comunicacion",
		alert_comm_error_body:
			"No se pudo comunicar con StellarMate. Por favor, asegurese que esta conectado a su red.",
		ekoslive_down_title: "EkosLive esta caido",
		ekoslive_down_body:
			"EkosLive no esta funcionando, intente reiniciar StellarMate o contacte con el soporte de StellarMate.",
		kstars_down_title: "KStars esta caido",
		kstars_down_body:
			"KStars no esta funcionando, intente reiniciar StellarMate o contacte con el soporte de StellarMate.",
		wait_while_syncing: "Por favor espere mientras sincroniza",
		// External Storage
		reset_default: "Reset to default",
		external_storage: "External Storage",
	},
	darkLibrary: {
		title: "Dark Library",
		darks: "Darks",
		defects: "Defects",
		prefer: "Prefer",
		create_darks_title: "Create Darks",
		create_defects_title: "Create Defect Map",
		view_masters_title: "View Masters",
		progress: "Progress",

		create_darks: {
			exposure_range: "Exp. Range",
			to: "To",
			temp_range: "T. Range",
			binning: "Binning",
			binning_one: "1x1",
			binning_two: "2x2",
			binning_four: "4x4",
			total_images: "Total",
		},

		create_defect_map: {
			master_dark: "Master Dark",
			bad_pixels: "Bad Pixels",
			hot_pixels: "Hot Pixels",
			generate_map: "Generate Map",
			save_map: "Saved",
			deviation: "σ",
		},
	},
	achievements: {
		score: "Total Score",
		badge: "Badge",
		achievements: "Achievements",
		unlocked: "Achievement Unlocked",
		points: "Points",
		completed: "Completed",
		not_completed: "Not completed",
		capture_preview_title: "First Light!",
		ten_sequences_title: "So it begins!",
		mount_goto_title: "Magic Fingers",
		video_recording_title: "Director’s Cut",
		weather_check_title: "Cloud Magnet",
		live_stacking_title: "Let there be details",
		create_darks_title: "Embrace the dark side",
		create_defect_title: "Cosmic Makeup",
		import_mosaic_title: "Mosaic Weaver",
		messier_captured_title: "MXXXX (e.g. M1)",
		all_messier_title: "Cosmic Marathon",
		scheduler_title: "Robotic Master",
		capture_master_title: "Sky Master",
		capture_legend_title: "Sky Legend",
		paa_title: "Perfectionist",
		guide_rms_title: "Bullseye!",

		capture_preview_description: "Capture a Preview",
		ten_sequences_description: "Capture a sequence with 10 counts",
		mount_goto__description:
			"Use Target GOTO by holding on the object for 3 seconds when the new image is captured",
		video_recording_description: "Record video for 1 minute",
		weather_check__description:
			"Use Cloud Map in weather info, Zoom in to at least 8x to check weather",
		live_stacking_description: "Live stacking. Perform at least 5 images",
		create_darks_description: "Create Darks of total 50 Images",
		create_defect_description: "Generate hot / cold pixels in Defect map above 80",
		import_mosaic_description: "Import Mosaics from telescopios",
		messier_captured_description: "A messier object is captured",
		all_messier_description: "All Messier objects were captured",
		scheduler_description:
			"Finish a scheduler job worth 2 or more hours of image data.",
		capture_master_description: "Capture a total of 500 images",
		capture_legend_description: "Capture a total of 1000 images",
		paa_description: "Finish PAA with box error lower than 30 arcsecs.",
		guide_rms_description: "Achieve total RMS guiding below 0.5 arcsecs.",
		filtered_image_description: "Capture a narrowband image",
		gallery_image_description: "Gallery Image downloaded",

		alert_reset_title: "Reset achievements",
		alert_agree_reset_body: "Are you sure you want to reset all achievements?",
	},
	tourGuide: {
		tour_guide: "Tour Guide",
		previous: "Previous",
		finish: "Finish",
		title_devices_list: "StellarMate Devices List",
		title_device_actions: "Device Actions",
		title_profiles: "Profiles",
		title_port_selector: "Port Selector",
		title_trains: "Optical trains",
		title_weather_bar: "Weather bar",
		title_cloud_report: "Cloud Report",
		title_next: "What's next?",

		title_focus: "Focus",
		title_align: "Align",
		title_guide: "Guide",
		title_capture: "Capture",
		title_mount: "Mount",
		title_observatory: "Observatory",
		title_scheduler: "Scheduler",
		title_indi: "INDI Control Panel",
		title_quick_controls: "Quick Controls",
		title_preview: "Preview",
		title_framing: "Framing",
		title_live_video: "Live Video",
		title_stop: "Stop",
		title_live_stacking: "Live Stacking",
		title_quick_settings: "Qucik Camera Settings",

		title_targets_info: "About Targets",
		title_search_bar: "Search bar",
		title_time_controls: "Time Controls",
		title_target_controls: "Targets Controls",
		title_object_info: "Object info",
		title_fov: "Target Field Of View",
		title_target_action: "Target Action",

		description_devices_list:
			"This is the list of automatically discovered and manually added StellarMate units. Tap RESCAN to detect new StellarMate units on the network.",
		description_device_actions:
			"Remove a device from the list, perform a factory reset, or log out.",
		description_profiles:
			"Manage your astronomy equipment in Equipment Profiles. All equipment must be powered and connected to StellarMate before starting a profile. Once a profile is started, configure the Optical Trains and then tap Ekos to start your astrophotography session.",
		description_port_selector:
			"After a profile is started for the first time, select the serial and/or network settings for your devices.",
		description_trains:
			"Set up how your equipment is arranged using Optical trains. Assign each device to a specific function. Create a train for each camera.",
		description_weather_bar: "Brief weather report and current site Bortle class",
		description_cloud_report: "3-hours Cloud overlay.",
		description_next:
			"Explore applicable astronomical targets by tapping the Targets tab. Use Go & Solve to center your target in the camera frame. Open the Framing Assistant to achieve the perfect desired orientation. Head over to Ekos tab to set up imaging sequences and live stack images.",
		description_focus: "Focus the camera by using a motorized focuser.",
		description_align:
			"Center the mount exactly on target by plate-solving an image.",
		description_guide:
			"Keep the mount locked to your target during tracking to enable long exposures.",
		description_capture:
			"Create sequences to capture images using configurable settings. Manage filter wheel settings and Dark Library.",
		description_mount:
			"Toggle tracking, parking, and meridian flip settings. Configure auto-park.",
		description_observatory: "Control dome and dust-cap equipment.",
		description_scheduler:
			"Automate complete astrophotography session by selecting target and sequence file. Import mosaics from Telescopius.",
		description_indi: "Direct low-level access to equipment properties.",
		description_quick_controls:
			"Quick access to mount, camera, and rotator controls.",
		description_preview: "Capture a single preview frame.",
		description_framing: "Loop exposures indefinitely until stopped",
		description_live_video:
			"Start live video streams and record videos to storage.",
		description_stop: "Stop any ongoing exposures or recordings.",
		description_live_stacking:
			"Live stack images to increase signal to noise ratio. If an existing capture sequence is running, live stacking will use incoming images otherwise it will loop exposures using settings in Quick Camera Settings.",
		description_quick_settings:
			"Select active train and configure camera and filter wheel settings.",

		description_targets_info:
			"Targets is the StellarMate Planning tool to streamline your observation session. Search from thousands of objects and filter them using simple criteria. Use the Framing Assistant to frame your targets.",
		description_search_bar:
			"Filter objects in the existing list or search for new objects by entering the name and tapping the search button.",
		description_time_controls:
			"If Ekos is offline, adjust the target date and time calculations.",
		description_target_controls:
			"Check out twilight information, manage FOVs, adjust filters, and select object types.",
		description_object_info: "Object magnitude, rise, transit, and set times.",
		description_fov: "Tap to enter Framing Assistant mode.",
		description_target_action:
			"Add target to favorites or custom list. Command a GOTO only or a GOTO followed by capture and solve. If Ekos is offline, schedule the target.",
		alert_guided_tour_title: "Take a guided tour on Stellarmate App features",
	},
	tooltip: {
		placeholder: "Placeholder %{0} or %{1}",
		placeholder_file: "The name of the .esq file, without extension.",
		placeholder_date: "The current time and date when the file is saved.",
		placeholder_type: "The frame type e.g: 'Light', 'Dark'",
		placeholder_exp: "The exposure duration in seconds.",
		placeholder_exposure:
			"The exposure duration in seconds as plain number, without any unit as suffix.",
		placeholder_offset: "The offset configured for capturing.",
		placeholder_gain: "The gain configured for capturing.",
		placeholder_bin: "The binning configured for capturing.",
		placeholder_iso: "The ISO value(DSLRs only).",
		placeholder_pierside: "The current mount's pier side",
		placeholder_temperature: "The camera temperature of capturing.",
		placeholder_filter: "The active filter name.",
		placeholder_seq:
			"The image sequence identifier where * is the number of digits used (1-9), This tag is mandatory and must be the last element in the format",
		placeholder_target: "The Target name.",
		placeholder_arbitrary:
			"Arbitrary text may also be included within the Format string, except the % and / characters. The / Path character can be used to define arbitrary directories.",
		placeholder_notes: "Notes:",
		placeholder_case:
			"• Tags are case sensitive in both their short and long forms",
		placeholder_datetime:
			"• Only use the %Datetime tag in the filename portion of the format, not in the path definition.",
		format_title:
			"Format is used to define the image file names by the use of placeholder tags.",
		suffix: "Number of digits used to append the sequence number to the filename",
		paa_desc:
			"Use plate-solving method for Polar Alignment. Plate solving is slower but provides more accurate results.",
		plate_solving:
			"Uses plate solving to track what the corrected alignment error is during the Refresh process. User should try to reduce the error in the Updated Err line below and minimize the size of the arrows.",
		mount_info: "Move Star and Calc Error",
		movestar_desc:
			"Like Move Star, But Ekos attemps to track the star being moved and estimates the current alignment error when it can.",
		remote_description: "Add remote INDI drivers to chain with the local INDI server configured by this profile. Format this field as a comma-separated list of quoted driver name, host name/address and optional port:",
		remote_zwo_description: "Connect to the named camera on 192.168.1.50, port 8000.",
		remote_eqmod_description: "Connect to the named mount on 192.168.1.50, port 7624.",
		remote_port: "Connect to all drivers found on 192.168.1.50, port 8000.",
		remote_ip: "Connect to all drivers found on 192.168.1.50, port 7624.",
		remote_info: "When omitted, host defaults to localhost and port defaults to 7624. Remote INDI drivers must be already running for the connection to succeed."
	},
	splash: {
		checking_for_updates: "Comprobando actualizaciones...",
		downloading_package: "Descargando actualizacion...",
		installing_update: "Instalando actualizacion...",
		channel_update: "Cambio de canal en proceso...",
		upto_date: "Ya esta actualizado.",
		update_installed: "Todas las actualizaciones se han instalado.",
		loading: "Cargando...",
	},
	validations: {
		username_required: "Nombre de usuario requerido",
		username_tooshort: "Minimo 3 caracteres requeridos",
		username_toolong: "No puede haber mas de 64 caracteres",
		username_invalid: "Caracter invalido en nombre de usuario",
		password_required: "Se requiere Clave",
		password_invalid: "Minimo 6 caracteres requeridos",
		confirm_password_required: "Confirme la clave requerida",
		confirm_password_mismatch: "Verifique la clave. Es incorrecta",
		email_required: "Se requiere E-Mail",
		email_invalid: "La Direccion de e-mail no es valida",
		license_required: "Se requiere Clave de Licencia",
		serial_required: "Se requiere Clave de Serie",
		new_scope_vendor: "Entre un nombre de Fabricante correcto",
		new_scope_model_invalid: "Entre un modelo correcto",
		new_scope_aperture_invalid: "Entre una apertura correcta",
		new_scope_focal_length_invalid: "Entre una longitud focal valida",
		new_scope_focal_ratio_invalid: "Enter a valid focal ratio",
	},
	progress: {
		please_wait: "Por favor espere ...",
		establishing_connection: "Estableciendo Conexion",
		cameras: "Obteniendo Camaras",
		mounts: "Obteniendo Monturas",
		scopes: "Obteniendo Telescopios",
		filter_wheels: "Obteniendo ruedas de filtro",

		//Device Connection
		registering: "Registrando...",
		registered: "Registrado",
		authenticating: "Autentificando...",
		authenticated: "Autentificado",
		checking_kstars: "Comprobando KStars...",
		kstars_open: "Abriendo KStars",
		checking_ekoslive: "Comprobando EkosLive...",
		ekoslive_connected: "EkosLive Conectado",
		starting_ekos: "Arrancando Ekos...",
		getting_devices: "Obteniendo Dispositivos...",
		loading_settings: "Cargando Configuraciones...",
		register_device: "Scanned QR Code, Registering Device: ",
	},
	welcome: {
		register_new_device: "¿Registrar nuevo Dispositivo?",
		have_existing_account: "¿Dispone ya de una cuenta?",
		require_sm_plus_pro: "Registrese si la tiene",
	},
	device_scanner: {
		scanning:
			"Por favor, espere mientras se buscan dispositivos StellarMate en la red",
		qr_scan: "Escanee el codigo QR de su Dispositivo",
	},
	statuses: {
		Idle: "Inactivo",
		prep: "Prep",
		run: "Run",
		Aborted: "Interrumpido",
		"Calibration error": "Error de Calibracion",
		Capturing: "Capturando",
		"In Progress": "En Progreso",
		"Setting Temperature": "Ajuste de temperatura",
		Slewing: "Girando",
		Calibrating: "Calibrando",
		Tracking: "Seguimiento",
		Guiding: "Guiado",
		Parking: "Aparcamiento",
		"User Input": "Entrada del usuario",
		Complete: "Terminado",
		Suspended: "Suspendido",
		Parked: "Aparcado",
	},
	connect: {
		register_welcome:
			"Inicie sesion en su cuenta de stellarmate.com para sincronizar dispositivos.",
		welcome_heading: "Bienvenido",
		welcome_description:
			"Asegurese de estar conectado al HotSpot de StellarMate o de que StellarMate este en la misma red que usted.",
		welcome_rescan:
			"Pulse en REESCANEAR para comenzar a escanear la red los dispositivos StellarMate.",
		device_unreachable:
			"¡El dispositivo no es accesible! Verifique la configuracion de red y energia.",
		login_mismatch:
			"Fallo la autentificacion. La clave de la aplicacion es diferente de la clave en linea de stellarmate.com. Registre la APP de nuevo con la clave correcta.",
		register_using_key: "Register Device using Serial number",
		old_stellarmate_heading: "¡Actualizacion requerida!",
		old_stellarmate_description:
			"Parece que esta utilizando una version anterior del S.O. StellarMate. Debe actualizar a la version mas reciente de StellarMate para continuar usando esta App.",
		sm_app_update_title: "SM App Update Required!",
		sm_app_update_body:
			"You appear to be using an older version of StellarMate App. Please update to the latest version.",
		primary: "Primario",
		guide: "Guia",
		scope: "Telescopio",
		btn_rescan: "REESCANEAR",
		btn_port_select: "Selector de Puertos",
		btn_sync_gps: "Sincronizar GPS",
		btn_dslr_setup: "Configuracion DSLR",
		btn_clear_driver_config: "Borrar la configuracion del controlador.",
		scan_in_progress: "Escaneado en progreso ...",
		connection_in_progress: "Conectando StellarMate...",
		registration_in_progress: "Registrando StellarMate...",
		logging_in_progress: "Iniciar sesion en StellarMate...",
		connecting: "Conectando...",
		logging: "Iniciando sesion...",
		generic: "Generic Serial",
		select_driver: "Please select device type and driver",
		invalid_ip: "No IP address found or invalid IP {0}. Please try again.",

		cloudsMap: {
			btn_clouds_map: "Clouds Map",
			attribution: "OpenStreetMap",
			map_title: "3-Hour Cloud Map",
			bortle_class: "Bortle Class",
		},

		ip_address: "Direccion IP",
		login_register: {
			heading: "Autentificacion",
			heading_online: "Registrese en stellarmate.com",
			connect_to_internet: "Debes estar conectado a Internet.",
			connect_to_sync: "Esto solo se hace una vez para sincronizar su cuenta.",
			reset_app:
				"Tip: Puede resincronizar la App con su cuenta en linea yendo a la ficha Acerca de y haciendo clic en" +
				" Boton de reinicio de la App y reanude la App",
			no_valid_device: "No hay disponible informacion valida del dispositivo.",

			setup_guide: "Guia de configuracion",
			register: "Registro",
			login: "Registrarse",
			serial: "Serial #",
			license: "Clave de Licencia",
			username: "Usuario",
			password: "Clave",
			confirm_password: "Confirmar Clave",
			first_name: "Nombre",
			last_name: "Apellidos",
			email: "Email",
			manually: "Manually",
		},
		device_manager: {
			alert_confirm_remove_title: "Confirmar Eliminacion",
			alert_confirm_remove_body: "¿Estas seguro que quieres quitar el dispositivo?",
			btn_sign_out: "Cerrar sesion",
		},
		profile_manager: {
			heading: "Perfiles de Equipos",
		},

		port_selector: {
			connect_all: "Conectar Todo",
		},

		manually_add_device: {
			heading: "Agregar manualmente un Dispositivo",
			btn_add_device: "Agregar Dispositivo",

			alert_unreachable_title: "Ha ocurrido un error",
			alert_unreachable_body:
				"Hubo un error al intentar localizar el dispositivo en la direccion IP especificada. Vuelva a comprobar la direccion IP e intentelo de nuevo.",
		},
		device_scanner: {
			no_device_before_scan: "No se ha detectado Disposivo. Ejecute Escanear.",
			no_device_after_scan: "Escaneo completo. No se encontraron dispositivos.",
			auto_scanned: "Escaneado automatico",
			manually_added: "Agregado manualmente",
			add_a_device: "Agregar un Dispositivo",
			devices_detected: "Detectado",
			no_network_found: "No detectada Red. Asegurese de estar conectado a la Red.",
		},
		add_profile: {
			add_profile: "Agregar perfil",
			edit_profile: "Editar Perfil",
			mount: "Montura",
			ccd: "Camera 1",
			dome: "Dome",
			guider: "Camera 2",
			ao: "Óptica adaptable",
			weather: "Clima",
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
            remote_drivers: "Remote Drivers"
		},
		add_scope: {
			add_scope: "Agregar Telescopio",
			edit_scope: "Editar Telescopio",
			vendor: "Fabricante",
			aperture: "Apertura",
			focal_length: "Longitud Focal",
		},
		auto_detect: {
			alert_auto_detect_title: "Autodetectar Instrucciones",
			alert_auto_detect_body:
				"Desconecte TODOS los equipos de StellarMate y presione Ok. Conectelos uno a uno para detectar" +
				" el tipo de dispositivo y el controlador. Despues de conectar cada dispositivo, debe confirmar el controlador.",
			alert_mapped_title: "Mapeo de dispositivo",
			alert_mapped_body:
				"El puerto serie del dispositivo esta mapeado correctamente.",
			alert_missing_driver_title: "Controlador perdido",
			alert_missing_driver_body: "Debes de Seleccionar primero un controlador.",
		},
		dslr_setup: {
			width: "Ancho",
			height: "Altura",
			pixel_width: "Ancho Pixel",
			pixel_height: "Altura Pixel",
		},
	},
	targets: {
		now: "Ahora",
		night: "Noche",
		rise: "Elevacion",
		moon: "Luna",
		sun: "Sol",
		search: "Buscar",
		cam_width: "Camera Width",
		cam_height: "Camera Height",
		fov_warning: "FOV is too small or large, Please check!",
		phases: {
			new_moon: "Luna Nueva",
			full_moon: "Luna Llena",
			first_quarter: "Primer Cuarto",
			third_quarter: "Tercer Cuarto",
			waxing_crescent: "Luna Creciente",
			waxing_gibbous: "Luna Menguante",
			waning_crescent: "Luna Creciente",
			waning_gibbous: "Luna Menguante",
		},
		lists: "Listas",
		framing_assistant: "Asistente de Encuadre",
		target_rotation: "Rotacion de Destino",
		current_rotation: "Rotacion Actual",
		rotate_capture: "Rotar y Capturar",
		goto_rotate: "GOTO & Rotar",
		angular_offset: "Compensacion Angular",
		no_objects_in_list:
			"No Objects found. Please check active list, adjust or reset the filters.",
		go_and_solve: "Dirigirse y Resolver",
		fov_profile: "Perfil FOV",
		fov_width: "Ancho FOV",
		fov_height: "Altura FOV",
		alert_select_FOV_body:
			"Please create or select an FOV profile in order to use Framing assistant.",
		alert_list_exists_body: "A list with that name already exists",
	},
	ekos: {
		heading: "Ekos",
		tgl_mount: "MONTURA",
		tgl_solution_bar: "EXPLORADOR DE SOLUCIONES",
		tgl_sequence: "SECUENCIA",
		tgl_properties: "PROPIEDADES",

		alert_ekos_offline_title: "Ekos esta fuera de linea",
		alert_ekos_offline_body:
			"Ekos parece estar desconectado en este momento. ¿Iniciaste el perfil del equipo?",

		alert_ekos_disconnected_title: "Dispositivos desconectados",
		alert_ekos_disconnected_body:
			"No todos los dispositivos del perfil de equipo estan conectados, conecte todos los dispositivos y vuelva a intentarlo.",

		ekos_dialog: {
			auto_closes_in: "Auto cierre en",
		},

		indi: {
			no_logs: "No logs are available for this driver",
		},

		controls_bar: {
			mount_speed: "Velocidad Montura",
			centering: "Centrado",
			find: "Encontrar",
			Max: "Max",
			parking_position: "Parking Position is set successfully.",
		},

		collapse_align: {
			heading: "Alinear",
			action_sync: "Sincronizar",
			action_slew: "Objetivo Alcanzado",
			action_nothing: "Nada",
			solver_backend: "Finalizado",
			control: "Control",
			solve: "Capturar y Resolver",
			load: "Cargar y Rotar",
			polar: "Alineacion Polar",
			accuracy: "Precision",
			settle: "Establecer",
			dark: "Oscuridad",
			arcsec: "arco seg",
			ms: "ms",
			x_axis: "Repeticiones",
			y_axis: "Error (arco seg)",
			refresh_rate: "Velocidad de Refresco",
			image_selected: "Image selected successfully",
			select_method: "Please select the image selection method",
			device_gallery: "Phone/Tablet gallery",
			sm_storage: "SM Storage",
			request_storage_permission: "Please allow the storage permission",
			celestial_warning:
				"Plate solving does not work very close to the celestial pole.",
			manualRotator: {
				heading: "Manual Rotator",
				current_pa: "Current PA",
				target_pa: "Target PA",
				another_image: "Take another Image",
			},
			align_settings: {
				rotator_control: "Rotator Control",
				use_scale: "Use Scale",
				use_position: "Use Position",
			},
			calibration_settings: {
				pulse: "Pulse",
				max_move: "Max Move",
				iterations: "Iterations",
				two_axis: "Two axis",
				square_size: "Auto square size",
				calibrate_backlast: "Remove DEC backlash in guide calibration",
				reset_calibration: "Reset Guide Calibration After Each Mount Slew",
				reuse_calibration: "Store and reuse guide calibration when possible",
				reverse_calibration: "Reverse DEC on pier-side change when reusing calibration",
				skyflats: "Sky flats",
			},
		},
		collapse_camera: {
			heading: "Capturar",
			type_light: "Light",
			type_bias: "Bias",
			type_flat: "Flat",
			type_dark: "Dark",
			format_fits: "FITS",
			format_native: "Por defecto",
			cooling_unavailable: "N/A",
			btn_add_to_sequence: "Agregar a la Secuencia",
			btn_loop: "Bucle",

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
				sequence_check_tooltip: "Run In-Sequence HFR check after this many frames.",

				median: "Use median focus",
				median_tooltip:
					"Calculate median focus value after each autofocus operation is complete. If the autofocus results become progressively worse with time, the median value shall reflect this trend and prevent unnecessary autofocus operations when the seeing conditions deteriorate.",
				save_sequence: "Save sequence HFR value to file",
				save_sequence_tooltip:
					"In-sequence HFR threshold value controls when the autofocus process is started. If the measured HFR value exceeds the HFR threshold, autofocus process is initiated. If the HFR threshold value is zero initially (default), then the autofocus process best HFR value is used to set the new HFR threshold, after applying the HFR threshold modifier percentage. This new HFR threshold is then used for subsequent In-Sequence focus checks. If this option is enabled, the HFR threshold value is constant and gets saved to the sequence file.",
			},
		},
		capture_presets: {
			heading: "Ajustes Preestablecidos",
		},
		capture_limits: {
			heading: "Configuracion de limites",
			guiding_deviation: "Desviacion de Guiado <",
			guiding_deviation_unit: '"',
			focus_hfr: "Enfoque automatico si HFR >",
			focus_hfr_unit: "pixeles",
			focus_deltaT: "Enfoque automatico si ΔT° >",
			focus_deltaT_unit: "°C",
			refocus_n: "Reenfoque cada",
			refocus_n_unit: "Minutos",
			refocus_on_hfr: "Refocus on HFR. Use",
			refocus_meridian: "Refocus after meridian flip",
			check_every: "Check every",
			about_guide_deviation: "About if guide deviation >",
			start_deviation: "Only start if guide deviation <",
			guide_deviation: "Guide deviation",
			consecutive_times: "consecutive times",
			dither_job: "Dither per job every",
		},
		capture_filters: {
			heading: "Configuracion de filtro",
			auto_focus: "Enfoque Automatico",
			lock_filter: "Filtro de Bloqueo",
			no_filters: "No filters have been found.",
		},
		targets_filters: {
			object_type: "Tipo de Objeto",
			alt: "Alt",
		},
		capture_auto_calibration: {
			heading: "Auto Calibracion",
			flat_source: "Fuente Flat",
			flat_duration: "Duracion Flat",
			dust_builtin: "Cubierta Antipolvo con Luz Flat incorporada",
			dust_external: "Cubierta Antipolvo con Luz Flat Externa",
			wall: "Mural",
			az: "Az",
			adu: "ADU",
			tolerance: "Tolerancia",
			park_mount: "Aparcar Montura",
			park_dome: "Aparcar Cupula",
			pre_actions: "Calibration Pre-Actions",
		},
		capture_file: {
			filename: "Nombre del Fichero",
			heading: "Configuracion de Archivo",
			prefix: "Prefijo",
			script: "Comandos",
			directory: "Directorio",
			ts: "TS",
			duration: "Duracion",
			suffix: "Suffix",
			usb: "USB Unmounted successfully",
			unmount: "Unmount",
		},

		collapse_dome: {
			heading: "Cubierta y Cupula",
			cap: "Cubierta",
			dome: "Cupula",
			shutter: "Obturador",
			dome_slaving: "Control Cupula",
			params: "Parametros",
			measurements: "Mediciones",
			autosync_threshold: "Limite de sincronizacion automatica (grados)",
			radius: "Radio (m)",
			shutter_width: "Ancho del Obturador (m)",
			n_displacement: "N Desplazamiento (m)",
			e_displacement: "E Desplazamiento (m)",
			up_displacement: "Desplazamiento Vertical (m)",
			ota_offset: "Compensacion OTA (m)",
		},
		collapse_focus: {
			heading: "Foco",
			hfr: "HFR",
			hfr_plot: "Trama HFR",
			focus_in: "Dentro",
			focus_out: "Fuera",
			steps: "Pasos",
			settings: {
				suspend_guiding: "Suspender el guiado",
				auto_select_star: "Seleccionar Estrella Automaticamente",
				subframe: "Submarco",
				fullfield: "Campo Total",
				dark: "Marco Oscuro",
				annulus: "Anillo",
			},
			process: {
				title: "Proceso",
				detection: "Deteccion",
				algorithm: "Algoritmo",
				threshold: "Limite",
				effect: "Efecto",
				average_over: "Promedio sobre",
				kernel_size: "Volumen Kernel",
				num_of_rows: "Num. de Filas",
				sigma: "Sigma",
			},
			mechanics: {
				title: "Mecanica",
				initial_step_size: "Volumen Inicial Paso",
				max_travel: "Max Recorrido",
				max_step_size: "Max Volumen Paso",
				backlash: "Retroceso",
				out_step_multiple: "Paso de salida multiple",
				number_steps: "Number Steps",
				af_overscan: "AF Overscan",
				capture_timeout: "Capture timeout",
				motion_timeout: "Motion timeout",
				overscan_delay: "Overscan Delay",
			},
		},
		collapse_guide: {
			total_rms_plot: "RMS",
			scope_primary: "Primario",
			guidingRate: "Tasa de guiado",
			via: "Via",
			box: "Recuadro",
			effects: "Efectos",
			dither: "Trepidar",
			frequency: "Frecuencia",
			every: "every",
			frames: "cuadros",
			gpg: "GPG",
			directions: "Direcciones",
			dec: "DEC",
			swap: "Intercambio",
			east: "+",
			west: "-",
			north: "+",
			south: "-",
			subframe: "Subcuadro",
			autostar: "Autoinicio",
			aggressiveness: "Acometer",
			rarms: 'RA RMS"',
			derms: 'DE RMS"',
			totalrms: 'Total RMS"',
			advanced: "Avanzado",
			clear_model: "Borrar modelo de calibracion",
			yAxis: "Deriva (arco seg)",

			min_error: "Min error",
			max_response: "Max response",
		},
		collapse_observatory: {
			heading: "Observatorio",
		},
		collapse_polar: {
			heading: "Alineacion Polar",
			mount_direction: "Direccion de la Montura",
			manual_slew: "Desplazamiento manual",
			west: "Oeste",
			east: "Este",
			mount_rotation: "Rotacion Montura",
			refresh: "Refresco",
			fov_error:
				"Desactivado: el campo de vision FOV debe de ser de 30 Minutos de arco o mas.",
			polar_error: "Error en la Polar: ",
			az_error: "Error AZ: ",
			al_error: "Error AL: ",
		},
		collapse_sequence: {
			progress: "Secuencias de Inicio y Parada",
			sequence: "Secuencia",
			overall_progress: "Progreso General",
			sequences: "Secuencias",
			no_sequences: "Sin secuencias. Puede agregarlas pulsando Agregar Secuencia.",
			alert_sequence_error_body: "Error saving sequence file",
			alert_sequence_loading_body: "Error loading sequence file",
			alert_sequence_delete_body: "Error deleting sequence file",
		},
		collapse_mount: {
			meridian_flip: "Giro por paso del Meridiano",
			flip_if_ha: "Giro si HA >",
			flip_if_ha_unit: "°",
			pierside: "Lado del pilar",
			auto_park: "Auto Aparcado",
			auto_park_everyday: "Todos los dias",
			park_at: "Aparcar en",
			reset_options: "Restablecer Opciones",
			Min_alt: "Min. Alt",
			Max_alt: "Max. Alt",
			enable_alt_limits: "Habilitar Limites Alt",
			enable_ha_limits: "Habilitar Limites HA",
			Max_ha: "Max. HA (horas)",
			clear_model: "Borrar Modelo",
			east: "E",
			west: "W",
			east_long: "Este (apuntando al oeste)",
			west_long: "Oeste (apuntando al este)",
			reverse_NS: "Reverse North/South",
			reverse_WE: "Reverse West/East",
			time_source: "Time source",
			location_source: "Location source",
		},
		modal_add_to_seq: {
			heading: "Agregar a la Secuencia",
		},
		modal_goto_sync: {
			heading: "Ir a o Sincronizar",
			category: "Categoria",
		},
		mount_status_bar: {
			ra: "RA",
			de: "DE",
			az: "AZ",
			at: "AL",
			ha: "HA",
		},
		camera_status_bar: {
			bin: "Vincular con",
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
			right_asc: "Asc. Recta.",
			declination: "Declinacion",
		},
		histogram: {
			mean: "Promedio",
			median: "Media",
			minimum: "Min",
			maximum: "Max",
			bit_depth: "Profundidad de bits",
			non_linear_histogram: "Histograma no Lineal",
		},
		livestacking: {
			auto_dark: "Modo Oscuro Automatico",
			plate_solve: "Placa de resolucion",
			background: "Fondo",
			saturation: "Saturation",
			contrast: "Contraste",
			sigma_clipping: "Recorte Sigma",
			noImages: "No Live Stacking Images found",
		},
		scheduler: {
			scheduler: "Scheduler",
			j2000: "J2000",
			add_sequences: "Add Sequences",
			fits: "FITS File",
			priority: "Priority",
			profile: "Profile",
			startupConditions: "Job Startup",
			JobConstraints: "Job Constraints",
			completionConditions: "Job Completion",
			observatoryStartup: "Observatory Startup",
			abortedJobManagement: "Aborted Job",
			observatoryShutdown: "Observatory Shutdown",
			alt: "Alt >",
			moon: "Moon >",
			twilight: "Twilight",
			artifHorizon: "Artificial Horizon",
			sequenceCompletion: "Sequence Completion",
			repeatFor: "Repeat for",
			repeatUntilTerminated: "Repeat Until Terminated",
			repeatUntil: "Repeat until",
			unparkDome: "UnPark Dome",
			unparkMount: "UnPark Mount",
			uncap: "UnCap",
			warmCCD: "Warm CCD",
			none: "None",
			queue: "Queue",
			immediate: "Immediate",
			rescheduleErrors: "Reschedule Errors",
			no_jobs: "No Jobs in the queue",
			err_loading_folders: "Error loading folders",
			err_loading_fits: "Error loading .fits files",
			err_delete_file: "Error deleting file",
			add_job: "Add Job",
			start_jobs: "Start & Stop Jobs",
			culimination: "Culmination Offset",
			create_jobs: "Create Jobs",

			mosaic: {
				import: "Import Mosaic",
				planner: "Mosaic planner",
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
				reset_mount_before_tooltip: "Reset mount model before starting each job",
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
			empty: "No summary data available",
			deviation: "Deviation",
			inactive: "Inactive",
		},
	},
	optical_train: {
		optical_trains: "Optical Trains",
		telescope: "Telescope / Lens",
		create_new: "Create New",
		dslr_lens: "DSLR Lens",
		reset_train: "Reset Train",
		focal_ratio: "Focal Ratio",
		guide_via: "Guide Via",
		tooltip: {
			title: "Select the device that receives the guiding correction pulses",
			subject: "This can be one of the following devices:",
			mount_device:
				"If the Mount can receive guiding correction pulses, then it is best to select it so that the pulses are directly sent to the mount. This is the recommended option.",
			st4_device:
				"If using an ST4 cable between the guide camera and mount, then you should select the Guide Camera as the Guider.",
			dedicated_device:
				"If using a dedicated guider interface device (like Shoestring GPUSB) then select it as the Guider",
			dedicated: "Dedicated",
			filterWheel:
				"Select a filter wheel. This must be a standalone filter wheel connected to StellarMate via USB. If you have a filter wheel that is embedded in a camera, leave this field empty.",
		},
	},
	status: {
		system: "Sistema",
		info: "Info",
		software: "Software",
		cpu: "CPU",
		ram: "RAM",
		storage: "ALMACENAMIENTO",
		temperature: "TEMPERATURA",

		stable: "Estable",
		beta: "Beta",

		wifi_network: "IP Red Wifi",
		ethernet_network: "IP Ethernet",
		model: "Modelo",
		version: "Version",
		hostname: "Nombre del Host",
		time: "Hora",
		release_type: "Tipo de Publicacion",
		updates: "Actualizaciones",

		hotspotMode: "Modo Punto de Acceso",
		wifiNetwork: "Red Wifi",
		wifiCountry: "WiFi Country",

		wifiBand: "Banda WiFi",

		update_available: "Nuevas Actualizaciones Disponibles",

		btn_vnc: "Escritorio (VNC)",
		btn_web_manager: "Administrador Web",
		btn_restart: "Reiniciar",
		btn_shutdown: "Apagar",
		btn_manage_wifi: "Administrador WiFi",
		btn_enable_direct_ethernet: "Habilitar Ethernet Directo",
		btn_disable_direct_ethernet: "Deshabilitar Ethernet Directo",
		btn_enable_hotspot: "Habilitar Punto de Acceso",
		btn_disable_hotspot: "Deshabilitar Punto de Acceso",
		btn_change_hostname: "Cambiar Nombre del Host",
		btn_check_for_updates: "Buscar Actualizaciones",
		btn_update_now: "Actualizar Ahora",
		btn_update_in_progress: "Actualizando...",
		btn_factory_reset: "Restablecimiento de Fabrica",
		btn_change_resolution: "Cambiar Resolucion",
		btn_later: "Mas tarde",
		btn_resize_fs: "Redimensionar SD",
		btn_continue: "Continuar",
		information_ekos_offline:
			"Ekos is offline. Please start the equipment profile directly or via the Scheduler.",
		no_camera_detected: "No cameras detected or camera offline.",

		alert_device_offline_title: "El Dispositivo esta desconectado",
		alert_device_offline_body:
			"El Dispositivo parece estar desconectado en este momento. ¿Ha iniciado sesion en el Dispositivo?",

		alert_restart_title: "Reiniciando StellarMate",
		alert_restart_body:
			"Su dispositivo ahora se reiniciara. Puede intentar volver a conectarse una vez que se reinicie.",
		alert_shutdown_title: "Apagando StellarMate",
		alert_shutdown_body:
			"Tu Dispositivo se apagara ahora. Para poder volverlo a usar, debera encenderlo manualmente.",

		alert_resize_title: "Cambiar la Capacidad de la Tarjeta microSD",
		alert_resize_body:
			"StellarMate aumentara la capacidad completa de la tarjeta SD. Reinicie StellarMate despues de cambiar la capacidad.",
		alert_resize_btn_resize: "Cambiar la capacidad",

		alert_hotspot_enable_title: "Habilitando el Punto de Acceso",
		alert_hotspot_enable_body:
			"Si habilita el Punto de Acceso, Stellarmate se desconectara de cualquier red Wifi en la que este y se conectara a su propio Punto de Acceso. Para continuar usando StellarMate, debera conectarse a la misma Red de Punto de Acceso desde su Dispositivo. ¿Quiere continuar?",

		alert_hotspot_post_enable_title: "Conectese al Punto de Acceso",
		alert_hotspot_post_enable_body:
			'Ahora puede conectarse al Punto de Acceso "stellarmate" y presionar OK, cuando haya terminado, para continuar',

		alert_hotspot_disable_body:
			"La desactivacion del Punto de Acceso hara que StellarMate se conecte a su red inalambrica previamente guardada. Deberia estar en la misma red para continuar usando StellarMate cuando su Punto de Acceso esta desactivado. ¿Quiere continuar?",

		alert_factory_reset_body:
			"Restablecimiento de Fabrica realizado. Reinicie ahora StellarMate.",
		alert_factory_reset_confirmation_body:
			"¿Seguro que quiere reestablecer el dispositivo a la configuracion de Fabrica? Se borraran todos los ajustes. ¡Esta accion es irreversible!",

		alert_forget_wifi_title: "Olvidar Wifi",
		alert_forget_wifi_body:
			"Todas las redes WiFi se borraran y StellarMate se ejecutara en modo Punto de Acceso. Debe de cambiar a la red del Punto de Acceso en su telefono/tableta. ¿Quiere continuar?",

		alert_join_wifi_title: "Unirse a la red Wifi",
		alert_join_wifi_body:
			"Uniendose a una red Wifi, StellarMate cerrara el Punto de Acceso (si se inicio). Para continuar usando StellarMate, asegurese de estar en la misma red. ¿Quiere continuar?",

		alert_change_band_title: "¿Esta seguro de querer cambiar la Banda?",
		alert_change_band_body:
			"La aplicacion StellarMate podria desconectarse y el cambio de canal podria fallar debido a una variedad de razones, en cuyo caso el Punto de Acceso se restaurara a la configuracion predeterminada.",

		alert_change_resolution_title: "¡Conseguido!",
		alert_change_resolution_body:
			"Debe de reiniciar StellarMate para que tenga efecto en la resolucion",

		alert_change_release_title: "Canal Beta",
		alert_change_release_body:
			"¿Seguro que desea cambiar al Canal Beta inestable y sin soporte?",

		alert_direct_ethernet_title: "Ethernet Directo",
		alert_direct_ethernet_connect_body:
			"Conecte el cable Ethernet directamente entre StellarMate y su PC. Configure la direccion IP de su PC en 192.168.100.2 y la puerta de enlace en 192.168.100.1",
		alert_direct_ethernet_disconnect_body: "Retire el cable Ethernet directo.",

		alert_clear_all_driver_config_title:
			"Borrar todas las configuraciones del Controlador",
		alert_clear_all_driver_config_body:
			"¿Seguro que desea eliminar toda la configuracion del controlador?",

		alert_update_complete_title: "Actualizacion del S.O. SM",
		alert_update_complete_body: "Actualizacion completa, reinicie StellarMate.",

		alert_network_error_title: "Network error",
		alert_network_error_body: "Failed to query network information",
		alert_delete_directory_message:
			"You want to delete {0} directory and all files under it?",

		alert_permission_title: "Location permission",
		alert_permission_description:
			"StellarMate App requires Location information to synchronize StellarMate gadget location to the App location. Do you want to proceed?",

		alert_remote_isactive:
			"Failed to check if Remote support is active, Is your Stellarmate OS up to date? ",
		alert_remote_start: "Could not start the Remote support: ",
		alert_remote_stop: "Could not stop the Remote support: ",
		alert_remote_id: "Could not find Remote support ID",
		alert_remote_failed: "Failed to get Remote support ID: ",
		alert_remote_not_found: "No Remote support found: ",
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
			heading: "Cambiar Resolucion",
			mode: "Modo",
		},

		change_hostname_modal: {
			new_hostname: "Nombre nuevo Host",
		},

		change_wifi_modal: {
			heading: "Unirse a una Red",
			ssid: "SSID",
			err_wifi: "Hubo un problema al buscar redes Wifi.",
		},

		change_band_modal: {
			heading: "Cambiar Banda",
			band: "Banda",
			channel: "Canal",
		},

		vnc_view: {
			heading: "VNC",
			alert_unreachable_title: "VNC inaccesible",
			alert_unreachable_body:
				"Parece que hay un problema al intentar establecer la conexion con el visor de VNC",
		},

		web_manager_view: {
			alert_unreachable_title: "Administrador Web inaccesible",
			alert_unreachable_body:
				"Parece que hay un problema al intentar establecer la conexion con el Administrador Web",
		},
	},
	settings: {
		heading: "Ajustes",
		language: "Lenguaje",
		high_bandwidth: "Ancho de Banda Alto",
		transfer_images: "Transferir Imagenes",
		notifications: "Notificaciones",
		sounds: "Sonidos",
		cloud_storage: "Almacenamiento en la Nube",
		auto_sync: "Sincronizacion Automatica",
		location: "Ubicacion",
		reset_app: "Restablecer App",
		reset_app_body: "¿Borrar todas las configuraciones de la App?",
		metric: "Metric",
		imperial: "Imperial",
		file_logging: "File logging",
		alert_delete_account_title: "Delete Account",
		alert_delete_account_body: "Are you sure you want to delete your account?",
		color_scheme_sky_map: "Sky Map Scheme",
	},
	cloud: {
		heading: "Visor",
		btn_filters: "Filtros",
		btn_gallery: "Galeria",
		btn_offline_viewer: "Visor sin conexion",
		btn_cloud_viewer: "Visor de la Nube",
		no_images_title: "No se encontraron Imagenes",
		no_images_body: "Intente cambiar los filtros.",
		no_selected_title: "No se selecciono ninguna Imagen",
		no_selected_body: "Seleccione una Imagen de la Galeria",
		cloud_disabled_title: "La nube esta deshabilitada",
		cloud_disabled_body:
			"Vaya a la configuracion y habilite la Nube para poder acceder a esta ficha.",
		pro_plan_body:
			"El almacenamiento en la Nube solo esta disponible para usuarios del plan Pro.",
		reset_ekoslive: "Reset Ekoslive",
		alert_cannot_download_title: "No se puede descargar",
		alert_cannot_download_body: "Hubo un error al intentar descargar.",
		alert_confirm_delete_title: "¿Esta seguro?",
		alert_confirm_delete_body:
			"¿Realmente desea eliminar {0}? Una vez eliminado, no se puede recuperar.",

		filters_drawer: {
			field: "Campo",
			condition: "Condicion",
			value: "Valor",
			btn_add_filter: "AÑADIR FILTRO",
			airmass: "Masa de Aire",
			object: "Objeto",
			contains: "Contenido",
		},
		gallery_drawer: {
			all: "Todo",
			h1: "1 h",
			h24: "24 h",
			d7: "7 d",
			m1: "1 m",
			y1: "1 a",
			images: "Imagenes",
			btn_sort: "ORDENAR",
			btn_delete_all: "BORRAR TODO",
			ascending: "A-Z",
			descending: "Z-A",

			alert_no_images_title: "Sin Imagenes",
			alert_no_images_body: "No hay Imagenes en la Galeria que puedan eliminarse..",
			alert_delete_all_body:
				"¿Esta seguro de que desea eliminar {0} Imagenes?. Esta es una operacion irreversible.",
		},
		info_drawer: {
			add_tags_here: "Agregar etiquetas aqui",
			captured_on: "Capturado en",
		},
	},
	about: {
		heading: "Acerca de",
		bundle: "Empaquetado",
		copyright_line1:
			"StellarMate esta desarrollado por Ikarus Technologies © 2017-2023",
		copyright_line2: "Imagen de Fondo cedida por Alamri Observatory",
		credits: {
			heading: "Credits",
			title: "Translations",
			name: "Translator name",
		},
	},
	messages: {
		// polar align
		polar_idle:
			"Esta herramienta proporciona un metodo simple para alinear la Polar con una montura ecuatorial alemana. Estacione su montura en la posicion de inicio donde apunte hacia el Polo celeste con el contrapeso hacia abajo. Seleccione la direccion y velocidad de la montura y luego haga clic en Iniciar para comenzar el proceso. Si no tiene una vista del Polo, use  el control de la montura con SkyMap o Ekos para apuntar a cualquier lugar, preferiblemente cerca del meridiano, elija Este u Oeste segun su lado, baje el angulo de rotacion si es necesario y haga clic en Iniciar.",
		alert_directions_not_found:
			"Coordinates not found, Please frame your target or enter coordinates manually.",
		manual_rotator:
			"Rotate camera by the indicated angle and then take an image to update the position angle",
		welcome: "Welcome to StellarMate",
	},
	ekosLivePro: {
		pushNotification: "Push Notification",
		level: "Notification Level",
		settings: "EkosLive Pro Settings",
	},
	skymap: {
		goto: "Ir a",
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
		power_off: "Power Off",
		power_sleep: "Power is in sleep mode. Tap to wake up.",
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
        usb_reset: "USB reset is successful"
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
    }
};

export default es;
