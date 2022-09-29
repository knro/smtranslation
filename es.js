const es = {
    general: {
        home: "Inicio",
        next: "Siguiente",
        ok: "OK",
        done: "Hecho",
        cancel: "Cancelar",
        confirm: "Confirm",
        apply: "Aplicar",
        save: "Salvar",
        select: "Seleccionar",
        connect: "Conectar",
        disconnect: "Desconectar",
        yes: "Si",
        no: "No",
        error: "Error",
        back: "Regresar",
        delete: "Borrar",
        remove: "Eliminar",
        online: "Conectado",
        offline: "Desconectado",
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

        selectFile: "Select file",
        selectFolder: "Select folder",
        selectedDir: "selected folder",
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
        learnMore: "Learn more",

        // for dropdown
        select_option: "Seleccionar opcion...",
        search: "Buscar...",
        no_results: "Sin resultados",

        // for buttons/toggles
        on: "ON",
        off: "OFF",
        go: "IR",
        add: "AÑADIR",
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
        alert_delete_profile_body: "Are you sure you want to delete the selected profile?",
        alert_delete_scope_body: "Are you sure you want to delete the selected scope?",

        // Confirm
        alert_confirmation_title: "Confirmation",
        alert_create_preset_body: "Are you sure you want to create preset with this name?",

        closed: "Cerrado",
        enable: "Halibilitado",
        disable: "Deshabilitado",
        selectTime: "Seleccionar Hora",
        set: "Ajustar",
        // error messages
        network_error: "Por favor, asegurese que su StellarMate esta conectado a tu red",
        internet_required: "Por favor, asegurese que tiene conexion a internet",
        alert_comm_error_title: "Fallo de comunicacion",
        alert_comm_error_body: "No se pudo comunicar con StellarMate. Por favor, asegurese que esta conectado a su red.",
        ekoslive_down_title: "EkosLive esta caido",
        ekoslive_down_body: "EkosLive no esta funcionando, intente reiniciar StellarMate o contacte con el soporte de StellarMate.",
        kstars_down_title: "KStars esta caido",
        kstars_down_body: "KStars no esta funcionando, intente reiniciar StellarMate o contacte con el soporte de StellarMate.",
        wait_while_syncing: "Por favor espere mientras sincroniza",
        // External Storage
        reset_default: "Reset to default",
        external_storage: "External Storage"
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
            binningOne: "1x1",
            binningTwo: "2x2",
            binningFour: "4x4",
            total_images: "Total",
        },

        create_defect_map: {
            master_dark: "Master Dark",
            bad_pixels: "Bad Pixels",
            hot_pixels: "Hot Pixels",
            generate_map: "Generate Map",
            save_map: "Saved",
            deviation: "σ"
        },

    },
    splash: {
        checking_for_updates: "Comprobando actualizaciones...",
        downloading_package: "Descargando actualizacion...",
        installing_update: "Instalando actualizacion...",
        channel_update: "Cambio de canal en proceso...",
        upto_date: "Ya esta actualizado.",
        update_installed: "Todas las actualizaciones se han instalado.",
        loading: "Cargando..."
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
        loading_settings: "Cargando Configuraciones..."
    },
    welcome: {
        register_new_device: "¿Registrar nuevo Dispositivo?",
        have_existing_account: "¿Dispone ya de una cuenta?",
        require_sm_plus_pro: "Registrese si la tiene"
    },
    device_scanner: {
        scanning: "Por favor, espere mientras se buscan dispositivos StellarMate en la red",
        qr_scan: "Escanee el codigo QR de su Dispositivo",
    },
    statuses: {
        Idle: "Inactivo",
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
        Parked: "Aparcado"
    },
    connect: {
        register_welcome: "Inicie sesion en su cuenta de stellarmate.com para sincronizar dispositivos.",
        welcome_heading: "Bienvenido",
        welcome_description: "Asegurese de estar conectado al HotSpot de StellarMate o de que StellarMate este en la misma red que usted.",
        welcome_rescan: "Pulse en REESCANEAR para comenzar a escanear la red los dispositivos StellarMate.",
        device_unreachable: "¡El dispositivo no es accesible! Verifique la configuracion de red y energia.",
        login_mismatch: "Fallo la autentificacion. La clave de la aplicacion es diferente de la clave en linea de stellarmate.com. Registre la APP de nuevo con la clave correcta.",
        old_stellarmate_heading: "¡Actualizacion requerida!",
        old_stellarmate_description:
            "Parece que esta utilizando una version anterior del S.O. StellarMate. Debe actualizar a la version mas reciente de StellarMate para continuar usando esta App.",
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

        ip_address: "Direccion IP",
        login_register: {
            heading: "Autentificacion",
            heading_online: "Registrese en stellarmate.com",
            connect_to_internet: "Debes estar conectado a Internet.",
            connect_to_sync: "Esto solo se hace una vez para sincronizar su cuenta.",
            reset_app: "Tip: Puede resincronizar la App con su cuenta en linea yendo a la ficha Acerca de y haciendo clic en" +
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
            email: "Email"
        },
        device_manager: {
            alert_confirm_remove_title: "Confirmar Eliminacion",
            alert_confirm_remove_body: "¿Estas seguro que quieres quitar el dispositivo?",
            btn_sign_out: "Cerrar sesion"
        },
        profile_manager: {
            heading: "Perfiles de Equipos"
        },

        port_selector: {
            connect_all: "Conectar Todo"
        },

        manually_add_device: {
            heading: "Agregar manualmente un Dispositivo",
            btn_add_device: "Agregar Dispositivo",

            alert_unreachable_title: "Ha ocurrido un error",
            alert_unreachable_body: "Hubo un error al intentar localizar el dispositivo en la direccion IP especificada. Vuelva a comprobar la direccion IP e intentelo de nuevo."
        },
        device_scanner: {
            no_device_before_scan: "No se ha detectado Disposivo. Ejecute Escanear.",
            no_device_after_scan: "Escaneo completo. No se encontraron dispositivos.",
            auto_scanned: "Escaneado automatico",
            manually_added: "Agregado manualmente",
            add_a_device: "Agregar un Dispositivo",
            devices_detected: "Detectado",
            no_network_found: "No detectada Red. Asegurese de estar conectado a la Red."
        },
        add_profile: {
            add_profile: "Agregar perfil",
            edit_profile: "Editar Perfil",
            mount: "Montura",
            ccd: "CCD",
            dome: "Dome",
            guider: "Tubo Guia",
            ao: "Óptica adaptable",
            weather: "Clima",
            aux1: "Aux1",
            aux2: "Aux2",
            aux3: "Aux3",
            aux4: "Aux4"
        },
        add_scope: {
            add_scope: "Agregar Telescopio",
            edit_scope: "Editar Telescopio",
            vendor: "Fabricante",
            aperture: "Apertura",
            focal_length: "Longitud Focal"
        },
        auto_detect: {
            alert_auto_detect_title: 'Autodetectar Instrucciones',
            alert_auto_detect_body: 'Desconecte TODOS los equipos de StellarMate y presione Ok. Conectelos uno a uno para detectar' +
                ' el tipo de dispositivo y el controlador. Despues de conectar cada dispositivo, debe confirmar el controlador.',
            alert_mapped_title: 'Mapeo de dispositivo',
            alert_mapped_body: 'El puerto serie del dispositivo esta mapeado correctamente.',
            alert_missing_driver_title: 'Controlador perdido',
            alert_missing_driver_body: 'Debes de Seleccionar primero un controlador.'
        },
        dslr_setup: {
            width: "Ancho",
            height: "Altura",
            pixel_width: "Ancho Pixel",
            pixel_height: "Altura Pixel"
        }
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
        phases:
            {
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
        no_objects_in_list: "No se encontraron Objetos, ajuste o restablezca los filtros.",
        go_and_solve: "Dirigirse y Resolver",
        fov_profile: "Perfil FOV",
        fov_width: "Ancho FOV",
        fov_height: "Altura FOV",
    },
    ekos: {
        heading: "Ekos",
        tgl_mount: "MONTURA",
        tgl_solution_bar: "EXPLORADOR DE SOLUCIONES",
        tgl_sequence: "SECUENCIA",
        tgl_properties: "PROPIEDADES",

        alert_ekos_offline_title: "Ekos esta fuera de linea",
        alert_ekos_offline_body: "Ekos parece estar desconectado en este momento. ¿Iniciaste el perfil del equipo?",

        alert_ekos_disconnected_title: "Dispositivos desconectados",
        alert_ekos_disconnected_body: "No todos los dispositivos del perfil de equipo estan conectados, conecte todos los dispositivos y vuelva a intentarlo.",

        ekos_dialog: {
            auto_closes_in: "Auto cierre en"
        },

        controls_bar: {
            mount_speed: "Velocidad Montura",
            centering: "Centrado",
            find: "Encontrar",
            Max: "Max"
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
            xAxis: "Repeticiones",
            yAxis: "Error (arco seg)",
            refresh_rate: "Velocidad de Refresco",
            manualRotator: {
                heading: "Manual Rotator",
                currentPA: "Current PA",
                targetPA: "Target PA",
                another_image: "Take another Image",
            },
            alignSettings: {
                rotator_control: "Rotator Control",
                use_scale: "Use Scale",
                use_position: "Use Position"
            },
            calibrationSettings: {
                pulse: "Pulse",
                maxMove: "Max Move",
                twoAxis: "Two axis",
                squareSize: "Auto square size",
                calibrateBacklast: "Remove DEC backlash in guide calibration",
                resetCalibration: "Reset Guide Calibration After Each Mount Slew",
                reuseCalibration: "Store and reuse guide calibration when possible",
                reverseCalibration: "Reverse DEC on pier-side change when reusing calibration"
            }

        },
        collapse_camera: {
            heading: "Capturar",
            type_light: "Light",
            type_bias: "Bias",
            type_flat: "Flat",
            format_fits: "FITS",
            format_native: "Por defecto",
            cooling_unavailable: "N/A",
            btn_add_to_sequence: "Agregar a la Secuencia",
            btn_loop: "Bucle"
        },
        capture_presets: {
            heading: "Ajustes Preestablecidos"
        },
        capture_limits: {
            heading: "Configuracion de limites",
            guiding_deviation: "Desviacion de Guiado <",
            guiding_deviation_unit: "\"",
            focusHFR: "Enfoque automatico si HFR >",
            focusHFR_unit: "pixeles",
            focusDeltaT: "Enfoque automatico si ΔT° >",
            focusDeltaT_unit: "°C",
            refocusN: "Reenfoque cada",
            refocusN_unit: "Minutos"
        },
        capture_filters: {
            heading: "Configuracion de filtro",
            auto_focus: "Enfoque Automatico",
            lock_filter: "Filtro de Bloqueo"
        },
        targets_filters: {
            object_type: "Tipo de Objeto",
            alt: "Alt"
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
            parkMount: "Aparcar Montura",
            parkDome: "Aparcar Cupula"
        },
        capture_file: {
            filename: "Nombre del Fichero",
            heading: "Configuracion de Archivo",
            prefix: "Prefijo",
            script: "Comandos",
            directory: "Directorio",
            ts: "TS",
            duration: "Duracion"
        },

        collapse_dome: {
            heading: "Cubierta y Cupula",
            cap: "Cubierta",
            dome: "Cupula",
            shutter: "Obturador",
            domeSlaving: "Control Cupula",
            params: "Parametros",
            measurements: "Mediciones",
            autosync_threshold: "Limite de sincronizacion automatica (grados)",
            radius: "Radio (m)",
            shutter_width: "Ancho del Obturador (m)",
            n_displacement: "N Desplazamiento (m)",
            e_displacement: "E Desplazamiento (m)",
            up_displacement: "Desplazamiento Vertical (m)",
            ota_offset: "Compensacion OTA (m)"
        },
        collapse_focus: {
            heading: "Foco",
            hfr: "HFR",
            hfr_plot: "Trama HFR",
            focus_in: "Dentro",
            focus_out: "Fuera",
            steps: "Pasos",
            settings: {
                suspendGuiding: "Suspender el guiado",
                autoSelectStar: "Seleccionar Estrella Automaticamente",
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
                averageOver: "Promedio sobre",
                kernelSize: "Volumen Kernel",
                numOfRows: "Num. de Filas",
                sigma: "Sigma"
            },
            mechanics: {
                title: "Mecanica",
                initialStepSize: "Volumen Inicial Paso",
                MaxTravel: "Max Recorrido",
                MaxStepSize: "Max Volumen Paso",
                backlash: "Retroceso",
                outStepMultiple: "Paso de salida multiple",
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
            rarms: "RA RMS\"",
            derms: "DE RMS\"",
            totalrms: "Total RMS\"",
            advanced: "Avanzado",
            clear_model: "Borrar modelo de calibracion",
            yAxis: "Deriva (arco seg)"
        },
        collapse_observatory: {
            heading: "Observatorio"
        },
        collapse_polar: {
            heading: "Alineacion Polar",
            mount_direction: "Direccion de la Montura",
            manual_slew: "Desplazamiento manual",
            west: "Oeste",
            east: "Este",
            mount_rotation: "Rotacion Montura",
            refresh: "Refresco",
            fov_error: "Desactivado: el campo de vision FOV debe de ser de 30 Minutos de arco o mas.",
            polar_error: "Error en la Polar: ",
            az_error: "Error AZ: ",
            al_error: "Error AL: "
        },
        collapse_sequence: {
            progress: "Secuencias de Inicio y Parada",
            sequence: "Secuencia",
            overall_progress: "Progreso General",
            sequences: "Secuencias",
            no_sequences: "Sin secuencias. Puede agregarlas pulsando Agregar Secuencia."
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
            west_long: "Oeste (apuntando al este)"
        },
        modal_add_to_seq: {
            heading: "Agregar a la Secuencia",
        },
        modal_goto_sync: {
            heading: "Ir a o Sincronizar",
            category: "Categoria",
            btn_goto: "Ir a"
        },
        mount_status_bar: {
            ra: "RA",
            de: "DE",
            az: "AZ",
            at: "AL",
            ha: "HA"
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
            fov: "FOV"
        },
        mount_overlay: {
            right_asc: "Asc. Recta.",
            declination: "Declinacion",
        },
        histogram: {
            mean: "Promedio",
            median: "Media",
            bit_depth: "Profundidad de bits",
            non_linear_histogram: "Histograma no Lineal"
        },
        livestacking: {
            auto_dark: "Modo Oscuro Automatico",
            plate_solve: "Placa de resolucion",
            background: "Fondo",
            saturation: "Saturation",
            contrast: "Contraste",
            sigma_clipping: "Recorte Sigma",
            noImages: "No Live Stacking Images found"
        },
        "scheduler": {
            "scheduler": "Scheduler",
            "j2000": "J2000",
            "fits": "FITS File",
            "priority": "Priority",
            "profile": "Profile",
            "startupConditions": "Job Startup Conditions",
            "JobConstraints": "Job Constraints",
            "completionConditions": "Job Completion Conditions",
            "observatoryStartup": "Observatory Startup Procedure",
            "abortedJobManagement": "Aborted Job Management",
            "observatoryShutdown": "Observatory Shutdown",
            "alt": "Alt >",
            "moon": "Moon >",
            "twilight": "Twilight",
            "artifHorizon": "Artificial Horizon",
            "sequenceCompletion": "Sequence Completion",
            "repeatFor": "Repeat for",
            "repeatUntilTerminated": "Repeat Until Terminated",
            "repeatUntil": "Repeat until",
            "unparkDome": "UnPark Dome",
            "unparkMount": "UnPark Mount",
            "uncap": "UnCap",
            "warmCCD": "Warm CCD",
            "none": "None",
            "queue": "Queue",
            "immediate": "Immediate",
            "rescheduleErrors": "Reschedule Errors (seconds wait)",
            "no_jobs": "No Jobs in the queue",
            "err_loading_folders": "Error loading folders",
            "err_loading_fits": "Error loading .fits files",
            "err_delete_file": "Error deleting file",
            "add_job": "Add Job",
            "start_jobs": "Start & Stop Jobs",
            "culimination": "Culmination Offset"


        },
    },
    optical_train: {
        optical_trains: "Optical Trains",
        telescope: "Telescope / Lens",
        create_new: "Create New"
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
        information_ekos_offline: 'Ekos is offline. Please start the equipment profile directly or via the Scheduler.',
        no_camera_detected: 'No cameras detected or camera offline.',

        alert_device_offline_title: "El Dispositivo esta desconectado",
        alert_device_offline_body: "El Dispositivo parece estar desconectado en este momento. ¿Ha iniciado sesion en el Dispositivo?",

        alert_restart_title: "Reiniciando StellarMate",
        alert_restart_body: "Su dispositivo ahora se reiniciara. Puede intentar volver a conectarse una vez que se reinicie.",
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
        alert_hotspot_post_enable_body: 'Ahora puede conectarse al Punto de Acceso "stellarmate" y presionar OK, cuando haya terminado, para continuar',

        alert_hotspot_disable_body:
            "La desactivacion del Punto de Acceso hara que StellarMate se conecte a su red inalambrica previamente guardada. Deberia estar en la misma red para continuar usando StellarMate cuando su Punto de Acceso esta desactivado. ¿Quiere continuar?",

        alert_factory_reset_body: "Restablecimiento de Fabrica realizado. Reinicie ahora StellarMate.",
        alert_factory_reset_confirmation_body: "¿Seguro que quiere reestablecer el dispositivo a la configuracion de Fabrica? Se borraran todos los ajustes. ¡Esta accion es irreversible!",

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
        alert_change_resolution_body: "Debe de reiniciar StellarMate para que tenga efecto en la resolucion",

        alert_change_release_title: "Canal Beta",
        alert_change_release_body: "¿Seguro que desea cambiar al Canal Beta inestable y sin soporte?",

        alert_direct_ethernet_title: "Ethernet Directo",
        alert_direct_ethernet_connect_body: "Conecte el cable Ethernet directamente entre StellarMate y su PC. Configure la direccion IP de su PC en 192.168.100.2 y la puerta de enlace en 192.168.100.1",
        alert_direct_ethernet_disconnect_body: "Retire el cable Ethernet directo.",

        alert_clear_all_driver_config_title: "Borrar todas las configuraciones del Controlador",
        alert_clear_all_driver_config_body: "¿Seguro que desea eliminar toda la configuracion del controlador?",

        alert_update_complete_title: "Actualizacion del S.O. SM",
        alert_update_complete_body: "Actualizacion completa, reinicie StellarMate.",

        alert_network_error_title: "Network error",
        alert_network_error_body: "Failed to query network information",
        change_resolution_modal: {
            heading: "Cambiar Resolucion",
            mode: "Modo"
        },

        change_hostname_modal: {
            new_hostname: "Nombre nuevo Host"
        },

        change_wifi_modal: {
            heading: "Unirse a una Red",
            ssid: "SSID",
            err_wifi: "Hubo un problema al buscar redes Wifi."
        },

        change_band_modal: {
            heading: "Cambiar Banda",
            band: "Banda",
            channel: "Canal"
        },

        vnc_view: {
            heading: "VNC",
            alert_unreachable_title: "VNC inaccesible",
            alert_unreachable_body: "Parece que hay un problema al intentar establecer la conexion con el visor de VNC"
        },

        web_manager_view: {
            alert_unreachable_title: "Administrador Web inaccesible",
            alert_unreachable_body: "Parece que hay un problema al intentar establecer la conexion con el Administrador Web"
        }
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
        reset_app_body: "¿Borrar todas las configuraciones de la App?"
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
        cloud_disabled_body: "Vaya a la configuracion y habilite la Nube para poder acceder a esta ficha.",
        pro_plan_body: "El almacenamiento en la Nube solo esta disponible para usuarios del plan Pro.",
        alert_cannot_download_title: "No se puede descargar",
        alert_cannot_download_body: "Hubo un error al intentar descargar.",
        alert_confirm_delete_title: "¿Esta seguro?",
        alert_confirm_delete_body: "¿Realmente desea eliminar {0}? Una vez eliminado, no se puede recuperar.",

        filters_drawer: {
            field: "Campo",
            condition: "Condicion",
            value: "Valor",
            btn_add_filter: "AÑADIR FILTRO",
            airmass: "Masa de Aire",
            object: "Objeto",
            contains: "Contenido"
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
            alert_delete_all_body: "¿Esta seguro de que desea eliminar {0} Imagenes?. Esta es una operacion irreversible."
        },
        info_drawer: {
            add_tags_here: "Agregar etiquetas aqui",
            captured_on: "Capturado en"
        }
    },
    about: {
        heading: "Acerca de",
        bundle: "Empaquetado",
        copyright_line1: "StellarMate esta desarrollado por Ikarus Technologies © 2017-2022",
        copyright_line2: "Imagen de Fondo cedida por Alamri Observatory"
    },
    messages: {
        // polar align
        polar_idle: "Esta herramienta proporciona un metodo simple para alinear la Polar con una montura ecuatorial alemana. Estacione su montura en la posicion de inicio donde apunte hacia el Polo celeste con el contrapeso hacia abajo. Seleccione la direccion y velocidad de la montura y luego haga clic en Iniciar para comenzar el proceso. Si no tiene una vista del Polo, use  el control de la montura con SkyMap o Ekos para apuntar a cualquier lugar, preferiblemente cerca del meridiano, elija Este u Oeste segun su lado, baje el angulo de rotacion si es necesario y haga clic en Iniciar.",
        "alert_directions_not_found": "Coordinates not found, Please frame your target or enter coordinates manually.",
        manual_rotator: "Rotate camera by the indicated angle and then take an image to update the position angle",
        welcome: "Welcome to StellarMate"
    },
    ekosLivePro: {
        pushNotification: "Push Notification",
        level: "Notification Level",
        settings: "EkosLive Pro Settings"
    }
};

export default es;
