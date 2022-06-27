const en = {
    general: {
        home: "Home",
        next: "Next",
        ok: "OK",
        done: "Done",
        cancel: "Cancel",
        apply: "Apply",
        save: "Save",
        select: "Select",
        connect: "Connect",
        disconnect: "Disconnect",
        disconnected: "Disconnected",
        yes: "Yes",
        no: "No",
        error: "Error",
        back: "Back",
        delete: "Delete",
        remove: "Remove",
        online: "Online",
        offline: "Offline",
        remote: "Remote",
        preset: "Preset",
        camera: "Camera",
        focuser: "Focuser",
        filter_wheel: "Filter Wheel",
        filter: "Filter",
        exposure: "Exposure",
        binning: "Binning",
        action: "Action",
        scope_type: "Scope Type",
        solver_type: "Solver Type",
        type: "Type",
        gain: "Gain",
        offset: "Offset",
        format: "Format",
        encode: "Encode",
        iso: "ISO",
        count: "Count",
        delay: "Delay",
        status: "Status",
        target: "Target",
        angle: "Angle",
        sep_profile: "SEP Profile",
        direction: "Direction",
        rotation: "Rotation",
        automatic: "Automatic",
        manual: "Manual",
        progress: "Progress",
        position_angle: "PA",

        azimuth: "Azimuth",
        altitude: "Altitude",
        tags: "Tags",
        filename: "Filename",
        size: "Size",
        frame: "Frame",
        temperature: "Temperature",
        name: "Name",
        date: "Date",
        resolution: "Resolution",

        selectFile: "Select a file to load",

        // for dropdown
        select_option: "Select option...",
        search: "Search...",
        no_results: "No results",

        // for buttons/toggles
        on: "ON",
        off: "OFF",
        go: "GO",
        add: "ADD",
        edit: "EDIT",
        refresh: "REFRESH",
        reset: "RESET",
        reset_all: "Reset All",
        start: "Start",
        stop: "Stop",
        stopping: "Stopping",
        clear: "CLEAR",
        solve: "SOLVE",
        parked: "Park(ed)",
        unparked: "UnPark(ed)",
        open: "Open",
        close: "Close",
        opened: "Open(ed)",
        closed: "Close(ed)",
        enable: "Enable",
        disable: "Disable",
        selectTime: "Select Time",
        set: "Set",

        // Confirm Delete Alert
        alert_confirm_delete_title: "Confirm Delete",
        alert_delete_profile_body: "Are you sure you want to delete the selected profile?",
        alert_delete_scope_body: "Are you sure you want to delete the selected scope?",

        // error messages
        network_error: "Please make sure that your StellarMate is connected to your network",
        internet_required: "Please make sure that you are connected to the internet",
        alert_comm_error_title: "Communication Error",
        alert_comm_error_body: "Failed to communicate with StellarMate. Please make sure it is connected to your network.",
        ekoslive_down_title: "EkosLive is down",
        ekoslive_down_body: "EkosLive is not running, try rebooting StellarMate or contact StellarMate support.",
        kstars_down_title: "KStars is down",
        kstars_down_body: "KStars is not running, try rebooting StellarMate or contact StellarMate support.",
        wait_while_syncing: "Please wait while\n syncing",

        // External Storage
        reset_default: "Reset to default",
        external_storage: "External Storage"
    },
    darkLibrary:{
        title: "Dark Library",
        darks: "Darks",
        defects: "Defects",
        prefer: "Prefer",
        create_darks_title: "Create Darks",
        create_defects_title: "Create Defect Map",
        view_masters_title: "View Masters",

        create_darks:{
            exposure_range: "Exp. Range",
            to: "To",
            temp_range: "T. Range",
            binningOne: "1x1",
            binningTwo: "2x2",
            binningFour: "4x4",
            total_images: "Total",
        },

        create_defect_map:{
            master_dark: "Master Dark",
            bad_pixels: "Bad Pixels",
            hot_pixels: "Hot Pixels",
            cold_pixels: "Cold Pixels",
            generate_map: "Generate Map",
            save_map: "Saved",
            deviation: "σ"
        },
        
    },
    splash: {
        checking_for_updates: "Checking for updates...",
        downloading_package: "Downloading update...",
        installing_update: "Installing update...",
        channel_update: "Channel switching in progress...",
        upto_date: "Already up to date.",
        update_installed: "All updates installed.",
        loading: "Loading..."
    },
    validations: {
        username_required: "Username is mandatory",
        username_tooshort: "Minimum 3 characters required",
        username_toolong: "Can't have more than 64 characters",
        username_invalid: "Invalid characters in username",
        password_required: "Password required",
        password_invalid: "Minimum 6 characters required",
        confirm_password_required: "Confirm password required",
        confirm_password_mismatch: "Confirm password incorrect",
        email_required: "E-Mail required",
        email_invalid: "Invalid e-mail address",
        license_required: "License key required",
        serial_required: "Serial key required",
        new_scope_vendor: "Enter a valid vendor name",
        new_scope_model_invalid: "Enter a valid model",
        new_scope_aperture_invalid: "Enter a valid aperture",
        new_scope_focal_length_invalid: "Enter a valid focal length",
        enter_file_name: "Enter a filename"
    },
    progress: {
        please_wait: "Please wait ...",
        establishing_connection: "Establishing Connection",
        cameras: "Getting Cameras",
        mounts: "Getting Mounts",
        scopes: "Getting Scopes",
        filter_wheels: "Getting Filter Wheels",

        //Device Connection
        registering: "Registering...",
        registered: "Registered",
        authenticating: "Authenticating...",
        authenticated: "Authenticated",
        checking_kstars: "Checking KStars...",
        kstars_open: "KStars Open",
        checking_ekoslive: "Checking EkosLive...",
        ekoslive_connected: "EkosLive Connected",
        starting_ekos: "Starting Ekos...",
        getting_devices: "Getting Devices...",
        loading_settings: "Loading Settings..."
    },
    welcome: {
        register_new_device: "Register new device?",
        have_existing_account: "Have an existing account?",
        require_sm_plus_pro: "Register if you have"
    },
    device_scanner: {
        scanning: "Please wait while we are looking for StellarMate device(s) on the network",
        qr_scan: "Scan your Device QR Code",
    },
    statuses: {
        Idle: "Idle",
        Aborted: "Aborted",
        "Calibration error": "Calibration error",
        Capturing: "Capturing",
        "In Progress": "In Progress",
        "Setting Temperature": "Setting Temperature",
        Slewing: "Slewing",
        Calibrating: "Calibrating",
        Tracking: "Tracking",
        Guiding: "Guiding",
        Parking: "Parking",
        "User Input": "User Input",
        Complete: "Complete",
        Suspended: "Suspended",
        Parked: "Parked"
    },
    connect: {
        register_welcome: "Please sign in to your stellarmate.com account to synchronize devices.",
        welcome_heading: "Welcome",
        welcome_description: "Please make sure that you are either connected to StellarMate's HotSpot or StellarMate is on the same network as you are.",
        welcome_rescan: "Click RESCAN to begin scanning the network for StellarMate devices.",
        device_unreachable: "Device is not reachable! Check power and network settings.",
        login_mismatch: "Authentication failed. App password is different from online stellarmate.com password. Register App again with correct online password.",
        old_stellarmate_heading: "Update Required!",
        old_stellarmate_description: 
            "You appear to be using an older version of StellarMate OS. You must upgrade to the most recent version of StellarMate to continue using this App.",
        primary: "Primary",
        guide: "Guide",
        scope: "Scope",
        btn_rescan: "RESCAN",
        btn_port_select: "Port Selector",
        btn_sync_gps: "Sync GPS",
        btn_dslr_setup: "DSLR Setup",
        btn_clear_driver_config: "Clear Driver Config.",
        scan_in_progress: "Scanning In Progress ...",
        connection_in_progress: "Connecting StellarMate...",
        registration_in_progress: "Registering StellarMate...",
        logging_in_progress: "Logging to StellarMate...",
        connecting: "Connecting...",
        logging: "Logging...",

        cloudsMap: {
            btn_clouds_map: "Clouds Map",
            attribution: "© OpenStreetMap",
            map_title: "3-Hour Cloud Map"
        },

        ip_address: "IP Address",
        login_register: {
            heading: "Authenticate",
            heading_online: "Sign in to stellarmate.com",
            connect_to_internet: "You must be connected to the Internet.",
            connect_to_sync: "This is only done once to synchronize your account.",
            reset_app: "Tip: You can resynchronize the app with your online account by going to the About tab and clicking" +
                " Reset App button then re-launching the app",
            no_valid_device: "No valid device information available.",

            setup_guide: "Setup Guide",
            register: "Register",
            login: "Sign in",
            serial: "Serial #",
            license: "License Key",
            username: "Username",
            password: "Password",
            confirm_password: "Confirm Password",
            first_name: "First name",
            last_name: "Last name",
            email: "Email"
        },
        device_manager: {
            alert_confirm_remove_title: "Confirm Removal",
            alert_confirm_remove_body: "Are you sure that you want to remove this device?",
            btn_sign_out: "Sign Out"
        },
        profile_manager: {
            heading: "Equipment Profiles"
        },

        port_selector: {
            connect_all: "Connect All"
        },

        manually_add_device: {
            heading: "Manually Add Device",
            btn_add_device: "Add Device",

            alert_unreachable_title: "An error occurred",
            alert_unreachable_body: "There was an error while trying to locate the device at the specified IP address. Please re-check the IP address and try again."
        },
        device_scanner: {
            no_device_before_scan: "No Devices Detected. Run Scanner.",
            no_device_after_scan: "Scan complete. No devices found.",
            auto_scanned: "Auto Scanned",
            manually_added: "Manually Added",
            add_a_device: "Add a device",
            devices_detected: "Detected",
            no_network_found: "No network detected. Make sure you are connect to a network."
        },
        add_profile: {
            add_profile: "Add Profile",
            edit_profile: "Edit Profile",
            mount: "Mount",
            ccd: "CCD",
            guider: "Guider",
            ao: "Adaptive Optics",
            weather: "Weather",
            aux1: "Aux1",
            aux2: "Aux2",
            aux3: "Aux3",
            aux4: "Aux4"
        },
        add_scope: {
            add_scope: "Add Scope",
            edit_scope: "Edit Scope",
            vendor: "Vendor",
            aperture: "Aperture",
            focal_length: "Focal Length"
        },
        auto_detect: {
            alert_auto_detect_title: 'Auto Detect Instructions',
            alert_auto_detect_body: 'Unplug ALL equipment from StellarMate then press Ok. Then plug them one by one to detect' +
                ' the device type and driver. After each device is plugged, you need to confirm the driver.',
            alert_mapped_title: 'Device Mapping',
            alert_mapped_body: 'Device serial port is successfully mapped.',
            alert_missing_driver_title: 'Driver missing',
            alert_missing_driver_body: 'You must select a driver first.'
        },
        dslr_setup: {
            width: "Width",
            height: "Height",
            pixel_width: "Pixel Width",
            pixel_height: "Pixel Height"
        }
    },
    targets: {
        now: "Now",
        night: "Night",
        rise: "Rise",
        moon: "Moon",
        sun: "Sun",
        search: "Search",
        phases:
            {
                new_moon: "New Moon",
                full_moon: "Full Moon",
                first_quarter: "First quarter",
                third_quarter: "Third quarter",
                waxing_crescent: "Waxing crescent",
                waxing_gibbous: "Waxing gibbous",
                waning_crescent: "Waning crescent",
                waning_gibbous: "Waning gibbous",
            },
        lists: "Lists",
        framing_assistant: "Framing Assistant",
        target_rotation: "Target Position Angle",
        current_rotation: "Current Rotation",
        rotate_capture: "Rotate & Capture",
        goto_rotate: "GOTO & Rotate",
        angular_offset: "Angular Offset",
        no_objects_in_list: "No Objects found, please adjust or reset the filters.",
        go_and_solve: "Go & Solve",
        fov_profile: "FOV Profile",
        fov_width: "FOV Width",
        fov_height: "FOV Height",
    },
    ekos: {
        heading: "Ekos",
        tgl_mount: "MOUNT",
        tgl_solution_bar: "SOLUTION BAR",
        tgl_sequence: "SEQUENCE",
        tgl_properties: "PROPERTIES",

        alert_ekos_offline_title: "Ekos is offline",
        alert_ekos_offline_body: "Ekos seems to be offline at the moment. Did you start equipment profile?",

        alert_ekos_disconnected_title: "Devices disconnected",
        alert_ekos_disconnected_body: "Not all equipment profile devices are connected, please connect all devices then try again.",

        ekos_dialog: {
            auto_closes_in: "Auto closes in"
        },

        controls_bar: {
            mount_speed: "Mount Speed",
            centering: "Centering",
            find: "Find",
            max: "Max"
        },

        collapse_align: {
            heading: "Align",
            action_sync: "Sync",
            action_slew: "Slew to Target",
            action_nothing: "Nothing",
            solver_backend: "Backend",
            control: "Control",
            solve: "Capture & Solve",
            load: "Load & Slew",
            polar: "Polar Align",
            accuracy: "Accuracy",
            settle: "Settle",
            dark: "Dark",
            arcsec: "arcsec",
            ms: "ms",
            xAxis: "Iterations",
            yAxis: "Error (arcsec)",
            refresh_rate: "Refresh Rate",
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
        },
        collapse_camera: {
            heading: "Capture",
            type_light: "Light",
            type_bias: "Bias",
            type_flat: "Flat",
            format_fits: "FITS",
            format_native: "Native",
            cooling_unavailable: "N/A",
            btn_add_to_sequence: "Add to Sequence",
            btn_loop: "Loop"
        },
        capture_presets: {
            heading: "Preset Settings"
        },
        capture_limits: {
            heading: "Limit Settings",
            guiding_deviation: "Guiding Deviation <",
            guiding_deviation_unit: "\"",
            focusHFR: "Autofocus if HFR >",
            focusHFR_unit: "pixels",
            focusDeltaT: "Autofocus if ΔT° >",
            focusDeltaT_unit: "°C",
            refocusN: "Refocus every",
            refocusN_unit: "minutes"
        },
        capture_filters: {
            heading: "Filter Settings",
            auto_focus: "Auto Focus",
            lock_filter: "Lock Filter"
        },
        targets_filters: {
            object_type: "Object Type",
            alt: "Alt"
        },
        capture_auto_calibration: {
            heading: "Auto Calibration",
            flat_source: "Flat Source",
            flat_duration: "Flat Duration",
            dust_builtin: "Dust Cover with Built-in Flat Light",
            dust_external: "Dust Cover with External Flat Light",
            wall: "Wall",
            az: "Az",
            adu: "ADU",
            tolerance: "Tolerance",
            parkMount: "Park Mount",
            parkDome: "Park Dome"
        },
        capture_file: {
            filename: "File Name",
            heading: "File Settings",
            prefix: "Prefix",
            script: "Script",
            directory: "Directory",
            ts: "TS",
            duration: "Duration"
        },
    
        collapse_dome: {
            heading: "Cap & Dome",
            cap: "Cap",
            dome: "Dome",
            shutter: "Shutter",
            domeSlaving: "Dome Slaving",
            params: "Parameters",
            measurements: "Measurements",
            autosync_threshold: "Autosync Threshold (deg)",
            radius: "Radius (m)",
            shutter_width: "Shutter Width (m)",
            n_displacement: "N Displacement (m)",
            e_displacement: "E Displacement (m)",
            up_displacement: "Up Displacement (m)",
            ota_offset: "OTA Offset (m)"
        },
        collapse_focus: {
            heading: "Focus",
            hfr: "HFR",
            hfr_plot: "HFR Plot",
            focus_in: "In",
            focus_out: "Out",
            steps: "Steps",
            settings: {
                suspendGuiding: "Suspend Guiding",
                autoSelectStar: "Auto Select Star",
                subframe: "Sub Frame",
                fullfield: "Full Field",
                dark: "Dark Frame",
                annulus: "Annulus",
            },
            process: {
                title: "Process",
                detection: "Detection",
                algorithm: "Algorithm",
                threshold: "Threshold",
                effect: "Effect",
                averageOver: "Average Over",
                kernelSize: "Kernel Size",
                numOfRows: "Num. of Rows",
                sigma: "Sigma"
            },
            mechanics: {
                title: "Mechanics",
                initialStepSize: "Initial Step Size",
                maxTravel: "Max Travel",
                maxStepSize: "Max Step Size",
                backlash: "Backlash",
                outStepMultiple: "Out Step Multiple",
            },
        },
        collapse_guide: {
            total_rms_plot: "RMS",
            scope_primary: "Primary",
            guidingRate: "Guiding Rate",
            guider: "Guider",
            via: "Via",
            box: "Box",
            effects: "Effects",
            dither: "Dither",
            frequency: "Frequency",
            every: "every",
            frames: "frames",
            gpg: "GPG",
            directions: "Directions",
            dec: "DEC",
            swap: "Swap",
            east: "+",
            west: "-",
            north: "+",
            south: "-",
            subframe: "Subframe",
            autostar: "Auto Star",
            aggressiveness: "Aggressiveness",
            rarms: "RA RMS\"",
            derms: "DE RMS\"",
            totalrms: "Total RMS\"",
            advanced: "Advanced",
            clear_model: "Clear Calibration Model",
            yAxis: "Drift (arcsec)"
        },
        collapse_observatory: {
            heading: "Observatory"
        },
        collapse_polar: {
            heading: "Polar Alignment",
            mount_direction: "Mount Direction",
            manual_slew: "Manual Slew",
            west: "West",
            east: "East",
            mount_rotation: "Mount Rotation",
            refresh: "Refresh",
            fov_error: "Disabled: FOV must be 30 arcmins or wider.",
            polar_error: "Polar Error: ",
            // error: "Error: ",
            az_error: "AZ error: ",
            al_error: "AL error: "
        },
        collapse_sequence: {
            progress: "Start & Stop Sequences",
            sequence: "Sequence",
            overall_progress: "Overall Progress",
            sequences: "Sequences",
            no_sequences: "No sequences. You can add them by tapping on Add to Sequence."        },
        collapse_mount: {
            meridian_flip: "Meridian Flip",
            flip_if_ha: "Flip if HA >",
            flip_if_ha_unit: "°",
            pierside: "Pier Side",
            auto_park: "Auto Park",
            auto_park_everyday: "Every day",
            park_at: "Park at",
            reset_options: "Reset Options",
            min_alt: "Min. Alt",
            max_alt: "Max. Alt",
            enable_alt_limits: "Enable Alt Limits",
            enable_ha_limits: "Enable HA Limits",
            max_ha: "Max. HA (hours)",
            clear_model: "Clear Model",
            east: "E",
            west: "W",
            east_long: "East (pointing west)",
            west_long: "West (pointing east)"
        },
        modal_add_to_seq: {
            heading: "Add To Sequence",
        },
        modal_goto_sync: {
            heading: "Goto or Sync",
            category: "Category",
            btn_goto: "Goto"
        },
        mount_status_bar: {
            ra: "RA",
            de: "DE",
            az: "AZ",
            at: "AL",
            ha: "HA"
        },
        camera_status_bar: {
            bin: "Bin",
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
            right_asc: "Right Asc.",
            declination: "Declination",
        },
        histogram : {
            mean: "Mean",
            median: "Median",
            bit_depth: "Bit Depth",
            non_linear_histogram: "Non-Linear Histogram"
        },
        livestacking: {
            auto_dark: "Auto Dark",
            plate_solve: "Plate Solve",
            background: "Background",
            saturation: "Saturation",
            contrast: "Contrast",
            sigma_clipping: "Sigma Clipping",
            noImages: "No Live Stacking Images found"
        },
        scheduler: {
            scheduler: "Scheduler",
            j2000: "J2000",
            fits: "FITS File",
            priority: "Priority",
            profile: "Profile",
            startupConditions: "Job Startup Conditions",
            JobConstraints: "Job Constraints",
            completionConditions: "Job Completion Conditions",
            observatoryStartup: "Observatory Startup Procedure",
            abortedJobManagement: "Aborted Job Management",
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
            rescheduleErrors: "Reschedule Errors (seconds wait)",
            no_jobs: "No Jobs in the queue",
            err_loading_folders: "Error loading folders",
            err_loading_fits: "Error loading .fits files",
            err_delete_file: "Error deleting file",
        }
    },
    status: {
        system: "System",
        info: "Info",
        software: "Software",

        cpu: "CPU",
        ram: "RAM",
        storage: "STORAGE",
        temperature: "TEMPERATURE",

        stable: "Stable",
        beta: "Beta",

        wifi_network: "Wifi Network IP",
        ethernet_network: "Ethernet IP",
        model: "Model",
        version: "Version",
        hostname: "Hostname",
        time: "Time",
        release_type: "Release Type",
        updates: "Updates",

        hotspotMode: "Hotspot Mode",
        wifiNetwork: "Wifi Network",

        wifiBand: "WiFi Band",

        update_available: "New Updates Available",

        btn_vnc: "Desktop (VNC)",
        btn_web_manager: "Web Manager",
        btn_restart: "Restart",
        btn_shutdown: "Shutdown",
        btn_manage_wifi: "Manage WiFi",
        btn_enable_direct_ethernet: "Enable Direct Ethernet",
        btn_disable_direct_ethernet: "Disable Direct Ethernet",
        btn_enable_hotspot: "Enable Hotspot",
        btn_disable_hotspot: "Disable Hotspot",
        btn_change_hostname: "Change Hostname",
        btn_check_for_updates: "Check For Updates",
        btn_update_now: "Update Now",
        btn_update_in_progress: "Updating...",
        btn_factory_reset: "Factory Reset",
        btn_change_resolution: "Change Resolution",
        btn_later: "Later",
        btn_resize_fs: "Resize SD",
        btn_continue: "Continue",
        information_ekos_offline: 'Ekos is offline. Please start the equipment profile directly or via the Scheduler.',
        no_camera_detected: 'No cameras detected or camera offline.',

        alert_device_offline_title: "Device is offline",
        alert_device_offline_body: "Device seems to be offline at the moment. Did you login to a device?",

        alert_restart_title: "Restarting StellarMate",
        alert_restart_body: "Your device will now be restarted. You can try to reconnect once it is booted again.",
        alert_shutdown_title: "Shutting Down StellarMate",
        alert_shutdown_body:
            "Your device will turned-off now. To be able to re-use it you will need to manually turn it on.",

        alert_resize_title: "Resize microSD Card",
        alert_resize_body:
            "StellarMate will expand to the full SD card size. Restart StellarMate after resizing.",
        alert_resize_btn_resize: "Resize",

        alert_hotspot_enable_title: "Enabling Hotspot",
        alert_hotspot_enable_body:
            "If you enable hotspot, stellarmate will disconnect from any currently joined wifi network and start its own hotspot. To continue using StellarMate, you shall connect to the same hotspot network from your device. Do you want to continue?",

        alert_hotspot_post_enable_title: "Please connect to hotspot",
        alert_hotspot_post_enable_body: 'You may now connect to "stellarmate" hotspot and press OK when done to continue',

        alert_hotspot_disable_body:
            "Disabling hotspot will make StellarMate connect to its previously remembered Wireless network. You should be on the same network to continue using StellarMate when it's hotspot is disabled. Do you want to continnue?",

        alert_factory_reset_body: "Factory reset complete. Please restart StellarMate now.",
        alert_factory_reset_confirmation_body: "Are you sure you want to reset device to factory settings? All settings will be wiped. This action is irreversible!",

        alert_forget_wifi_title: "Forget Wifi",
        alert_forget_wifi_body:
            "All WiFi networks will be cleared and StellarMate will now run in HotSpot Mode. You need to switch to the hotspot network in your phone/tablet. Do you want to continue?",

        alert_join_wifi_title: "Join Wifi Network",
        alert_join_wifi_body:
            "Joining a wifi network will close the hotspot (if started) by StellarMate. To continue using StellarMate, make sure you are on the same network. Do you want to continue?",

        alert_change_band_title: "Are you sure you want to change the band?",
        alert_change_band_body:
            "StellarMate App could be disconnected and channel switching might fail due a variety of reasons in which case the hotspot will be restored to default settings.",

        alert_change_resolution_title: "Success!",
        alert_change_resolution_body: "You may now restart StellarMate for the resolution to take effect",

        alert_change_release_title: "Beta Channel",
        alert_change_release_body: "Are you sure you want to switch to the unstable and unsupported beta channel?",

        alert_direct_ethernet_title: "Direct Ethernet",
        alert_direct_ethernet_connect_body: "Connect Ethernet cable directly between StellarMate and your PC. Set your PC IP address to 192.168.100.2 and gateway to 192.168.100.1",
        alert_direct_ethernet_disconnect_body: "Remove direct Ethernet cable.",

        alert_clear_all_driver_config_title: "Clear All Driver Configuration",
        alert_clear_all_driver_config_body: "Are you sure you want to delete all driver configuration?",

        alert_update_complete_title: "SM OS Update",
        alert_update_complete_body: "Update complete, please restart StellarMate.",

        alert_network_error_title: "Network error",
        alert_network_error_body: "Failed to query network information",
        change_resolution_modal: {
            mode: "Mode"
        },

        change_hostname_modal: {
            new_hostname: "New Hostname"
        },

        change_wifi_modal: {
            heading: "Join A Network",
            ssid: "SSID",
            err_wifi: "There was a problem while looking for Wifi networks."
        },

        change_band_modal: {
            heading: "Change Band",
            band: "Band",
            channel: "Channel"
        },

        vnc_view: {
            heading: "VNC",
            alert_unreachable_title: "VNC unreachable",
            alert_unreachable_body: "There seems to be a problem while trying establish connection to VNC viewer"
        },

        web_manager_view: {
            alert_unreachable_title: "Web Manager unreachable",
            alert_unreachable_body: "There seems to be a problem while trying establish connection to Web Manager"
        }
    },
    settings: {
        heading: "Settings",
        language: "Language",
        high_bandwidth: "High Bandwidth",
        transfer_images: "Transfer Images",
        notifications: "Notifications",
        sounds: "Sounds",
        cloud_storage: "Cloud Storage",
        auto_sync: "Auto Sync",
        location: "Location",
        unit_system: "Unit System",
        reset_app: "Reset App",
        reset_app_body: "Purge all App settings?",
        metric: "Metric",
        imperial: "Imperial",
    },
    cloud: {
        heading: "View",
        btn_filters: "Filters",
        btn_gallery: "Gallery",
        btn_offline_viewer: "Offline Viewer",
        btn_cloud_viewer: "Cloud Viewer",
        no_images_title: "No images found",
        no_images_body: "Try changing the filters.",
        no_selected_title: "No image selected",
        no_selected_body: "Select an image from Galley",
        cloud_disabled_title: "Cloud is disabled",
        cloud_disabled_body: "Go to settings and enable Cloud to be able to access this tab.",
        pro_plan_body: "Cloud storage is only available for Pro plan users.",
        alert_cannot_download_title: "Cannot download",
        alert_cannot_download_body: "There was an error while trying to download.",
        alert_confirm_delete_title: "Are you sure?",
        alert_confirm_delete_body: "Do you really wish to delete {0}? Once deleted, it cannot be recovered again.",

        filters_drawer: {
            field: "Field",
            condition: "Condition",
            value: "Value",
            btn_add_filter: "ADD FILTER",
            airmass: "Airmass",
            object: "Object",
            contains: "Contains"
        },
        gallery_drawer: {
            all: "All",
            h1: "1h",
            h24: "24h",
            d7: "7d",
            m1: "1m",
            y1: "1y",
            images: "Images",
            btn_sort: "SORT",
            btn_delete_all: "DELETE ALL",
            ascending: "A-Z",
            descending: "Z-A",

            alert_no_images_title: "No images",
            alert_no_images_body: "There are no images in the gallery that could be deleted.",
            alert_delete_all_body: "Are you sure that you want to delete {0} image(s)? This is an irreversible operation."
        },
        info_drawer: {
            add_tags_here: "Add tags here",
            captured_on: "Captured on"
        }
    },
    about: {
        heading: "About",
        bundle: "Bundle",
        copyright_line1: "StellarMate is developed by Ikarus Technologies © 2017-2022",
        copyright_line2: "Background image by Alamri Observatory"
    },
    messages: {
        // polar align
        polar_idle: "This tool provides a simple method to polar align a German equatorial mount. Park your mount to home position where it points toward the celestial pole with the counter weight down. Select mount direction and speed and then click Start to begin the process. If you do not have a view of the pole, use the SkyMap or Ekos mount control to point anywhere, preferably near the meridian, choose East or West according your side, lower the rotation angle if necessary, and click Start.",
        alert_directions_not_found: "Coordinates not found, Please frame your target or enter coordinates manually."
    }
};

export default en;
