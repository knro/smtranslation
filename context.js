// Notes for translators: what a string means and where it appears.
//
// Key: the English key path (as in en.js). Value: a short note. Say where the text is shown, what it refers to,
// how much room it has, and what each {0}, {1} stands for. Write a note for every new key; keys added before this
// file existed are being filled in over time.
//
// This file is not loaded by the apps. It only exists for translators and for the i18n test.

const context = {
	// Align
	"ekos.collapse_align.error_plot":
		"Title of the Align graph that plots the plate-solving error of each solve. Short (about 20 characters).",
	"ekos.collapse_align.error":
		"Label above the latest plate-solving error value, in arcseconds. The \" is the arcsecond sign: keep it.",

	// Troubleshoot panel on the Focus card (pulse button): the Focus version of the Align strings next to them
	"troubleshoot.focus":
		"Title of the troubleshoot panel on the Focus card, as troubleshoot.align is on the Align card. Short (about 25 characters).",
	"troubleshoot.no_report_hint_focus":
		"Shown in the Focus troubleshoot panel when nothing failed yet, under troubleshoot.no_report. \"Check-up\" is the button below it (troubleshoot.run_checkup).",
	"troubleshoot.retrying_focus":
		"Status under a fix the user applied in the Focus troubleshoot panel, while autofocus runs again to test it. Short.",
	"troubleshoot.verified_focus":
		"Shown in the Focus troubleshoot panel when autofocus succeeded after a fix. One short sentence.",

	// Status under a fix the user applied that does not run the module again by itself, e.g. one that moves the
	// focuser or the mount: the fix is only confirmed when the user runs the module again
	"troubleshoot.rerun":
		"Status under a fix the user applied in the Align troubleshoot panel, when Align does not run again by itself: the user has to run Align again to see if the fix worked. One short sentence.",
	"troubleshoot.rerun_focus":
		"Status under a fix the user applied in the Focus troubleshoot panel, e.g. moving the focuser to the last good position, when autofocus does not run again by itself: the user has to run autofocus again to see if the fix worked. One short sentence.",
	"troubleshoot.rerun_guide":
		"Status under a fix the user applied in the Guide troubleshoot panel, when guiding does not start again by itself: the user has to start guiding again to see if the fix worked. One short sentence.",
	"troubleshoot.open_advisor":
		"Button on a suggestion in the Focus troubleshoot panel. It opens Focus Advisor, the screen that finds good autofocus settings. Use the same name as the Focus Advisor screen. Short (about 25 characters).",

	// Troubleshoot panel on the Guide card (pulse button): the Guide version of the Align strings next to them
	"troubleshoot.guide":
		"Title of the troubleshoot panel on the Guide card, as troubleshoot.align is on the Align card. Short (about 25 characters).",
	"troubleshoot.no_report_hint_guide":
		"Shown in the Guide troubleshoot panel when nothing failed yet, under troubleshoot.no_report. \"Check-up\" is the button below it (troubleshoot.run_checkup).",
	"troubleshoot.retrying_guide":
		"Status under a fix the user applied in the Guide troubleshoot panel, while calibration and guiding start again to test it. Short.",
	"troubleshoot.verified_guide":
		"Shown in the Guide troubleshoot panel when calibration or guiding worked after a fix. One short sentence.",

	// Guide: Manual Pulse dialog (Guide card > arrow button)
	"ekos.collapse_guide.manual_pulse":
		"Title of the dialog that sends single guide pulses to the mount by hand.",
	"ekos.collapse_guide.pulse_sent_via":
		"Line under the Manual Pulse title. {0} is the name of the guider device the pulses are sent to, e.g. \"Guide Simulator\".",
	"ekos.collapse_guide.pulse_no_guider":
		"Shown instead of the line above when the guide optical train has no guider. \"Optical Trains\" is the name of the Setup screen, use the same words as for optical_trains.",
	"ekos.collapse_guide.pulse_length":
		"Heading above the pulse duration input (in milliseconds).",
	"ekos.collapse_guide.pulse_moved":
		"Heading above two values: how far the mount moved in RA and DEC since the dialog opened or Reset was pressed.",
	"ekos.collapse_guide.pulse_moved_hint":
		"Small help text under those two values. Reset is the button next to them (general.reset).",

	// Community: booking hours page, almanac bar (tap a band or a sun to show its name and times)
	"community.booking.sunset":
		"Name of the sun icon on the almanac bar where the sun sets. Shown as \"Sunset: 6:20 PM\" under the bar. Short.",
	"community.booking.sunrise":
		"Name of the sun icon on the almanac bar where the sun rises. Shown as \"Sunrise: 5:06 AM\" under the bar. Short.",
	"community.booking.civil_twilight":
		"Astronomical term for the stretch after sunset (or before sunrise) when the sun is up to 6 degrees below the horizon. Shown as \"Civil Twilight: 5:30 PM - 6:00 PM\". Short.",
	"community.booking.nautical_twilight":
		"Astronomical term for the stretch when the sun is 6 to 12 degrees below the horizon. Shown as \"Nautical Twilight: 6:00 PM - 6:30 PM\". Short.",
	"community.booking.astronomical_twilight":
		"Astronomical term for the stretch when the sun is 12 to 18 degrees below the horizon, just before the sky is fully dark. Shown as \"Astronomical Twilight: 6:30 PM - 7:00 PM\". Short.",
	"community.booking.astronomical_dark":
		"Astronomical term for the part of the night when the sun is more than 18 degrees below the horizon and the sky is fully dark. Shown as \"Astronomical Dark: 7:00 PM - 5:00 AM\". Short.",

	// Community: observatory settings, Rentable switch
	// Community: the two texts an owner accepts before enabling Rentable (also on EkosLive)
	"community.observatory.rental_warning_title":
		"Title of the first rental dialog, the disclaimer of liability. 'Beta' marks the rental feature as beta.",
	"community.observatory.rental_warning":
		"Legal disclaimer of liability and assumption of risk, shown before an owner enables rentals. Lines starting with '### ' are headings, lines starting with '* ' are list items, other lines are paragraphs: keep those markers and line breaks. Keep the defined terms (the Providers) consistent. Legal text: have it reviewed by a legal translator.",
	"community.observatory.rental_agreement_title":
		"Title of the second rental dialog, the service agreement. Shown in capitals.",
	"community.observatory.rental_agreement":
		"The Observatory Rental Service Agreement an owner accepts. Lines starting with '## ' are section titles, '### ' numbered clauses, '* ' bullet points, others paragraphs: keep those markers, numbers and line breaks. 'Confirm' in the last paragraph is the button the owner presses. Legal text: have it reviewed by a legal translator.",
	"community.observatory.rentable_description":
		"Small text under the Rentable switch in the observatory settings. Rentable is community.observatory.rentable.",
	"community.observatory.rentable_needs_location":
		"Shown in orange under the disabled Rentable switch, and in an alert, when the observatory has no location yet. A short sentence.",
	"community.observatory.rentable_needs_profile":
		"Shown in orange under the disabled Rentable switch, and in an alert, when no equipment profile is synced with KStars. A short sentence.",

	// Community: observatory equipment profile, under the profile chips (owner only)
	"community.observatory.profile_synced":
		"Status line under the equipment profile chips: the profile matches a KStars profile. Short.",
	"community.observatory.profile_not_synced":
		"Status line under the equipment profile chips: the profile has not been linked to a KStars profile yet. Short.",
	"community.observatory.profile_sync":
		"Button label that links the equipment profile to a KStars profile. A verb, one word if possible.",

	// Live stacking: Masters dialog
	"ekos.livestacking.master_files":
		"Title of the dialog where the master calibration files for live stacking are chosen.",
	"ekos.livestacking.dark_master":
		"Label for the master DARK file (an averaged dark frame) subtracted from each live-stacked frame.",
	"ekos.livestacking.dark_flat":
		"Label for the master FLAT file (an averaged flat frame) used to correct vignetting and dust. Not a \"dark flat\": the key name is historical.",

	// Device tab: remote desktop on StellarMate OS 2.5 and later (replaces VNC)
	"status.remote_desktop_view.heading":
		"Title of the remote desktop screen and its row in the Device tab, on StellarMate OS 2.5 and later. Replaces the older \"VNC\" title. Short (about 20 characters).",
	"status.remote_desktop_view.alert_unreachable_title":
		"Title of the alert shown when the remote desktop page of the StellarMate cannot be loaded. Short.",
	"status.remote_desktop_view.alert_unreachable_body":
		"Body of the alert shown when the remote desktop page of the StellarMate cannot be loaded. One sentence.",
	"device.remote_desktop.update_password":
		"Button in the remote desktop screen header and title of the screen that changes the remote desktop password. Short (about 30 characters).",

	// Capture: rotator tool (Tools > Rotator on the Capture card)
	"ekos.collapse_camera.rotator_control.moving":
		"Status chip in the rotator tool header while the rotator is turning. One word, very short (about 10 characters).",
	"ekos.collapse_camera.rotator_control.idle":
		"Status chip in the rotator tool header while the rotator is not turning. One word, very short (about 10 characters).",
	"ekos.collapse_camera.rotator_control.alt_az_mount":
		"Chip in the rotator tool header when the mount is an altitude-azimuth (Alt-Az) mount, as opposed to an equatorial one. Very short (about 15 characters).",
	"ekos.collapse_camera.rotator_control.no_rotator":
		"Shown in the rotator tool header, in place of the rotator name, and as a warning banner when the capture optical train has no rotator. One line.",
	"ekos.collapse_camera.rotator_control.flip_tooltip":
		"Help text behind the (i) next to the Flip Policy setting (rotator_control.flip). The two choices it describes are rotator_control.flip_rotator and rotator_control.flip_position.",
	"ekos.collapse_camera.rotator_control.reverse_tooltip":
		"Help text behind the (i) next to the \"Reverse direction of Rotator\" switch (rotator_control.reverse_direction). One sentence.",
	"ekos.collapse_camera.rotator_control.derotate_tooltip":
		"Help text behind the (i) next to the \"Derotate Field\" switch, for Alt-Az mounts. \"Position angle\" is the camera position angle (rotator_control.pos_angle). One sentence.",
	"ekos.collapse_camera.rotator_control.threshold_tooltip":
		"Help text behind the (i) next to the field derotation threshold (rotator_control.derotation_threshold), in arcminutes. One sentence.",
	"ekos.collapse_camera.rotator_control.derotation_unavailable":
		"Note under the Alt-Az Field Derotation section when the mount is not an Alt-Az mount, so derotation cannot be used. One sentence.",
	"ekos.collapse_camera.rotator_control.calibrate_title":
		"Title of an info banner in the rotator tool when the camera offset (rotator_control.offset) has not been measured yet. Short (about 40 characters).",
	"ekos.collapse_camera.rotator_control.calibrate_body":
		"Body of the banner titled by rotator_control.calibrate_title. \"Capture & Solve\" is a button and \"Align\" a module: use their translated names. Keep the ° sign.",
	"ekos.collapse_camera.rotator_control.pa_east_of_north":
		"Abbreviation for \"East of North\", shown as \"PA · E of N\" in the middle of the rotator dial: the position angle is measured from north towards east. Very short (about 8 characters).",

	// Community > Bookings > Messages: conversations between EkosLive users
	"community.messages.messages":
		"Third tab of Community > Bookings, next to My Bookings and My Observatories: the user's conversations with other EkosLive users. Short (about 15 characters).",
	"community.messages.search_users":
		"Placeholder in the search box at the top of the Messages list. It finds people by full name or nickname to start a conversation with.",
	"community.messages.no_conversations":
		"Shown in the Messages list when the user has no conversations yet. The search box is just above it.",
	"community.messages.no_users":
		"Shown under the Messages search box when no one matches what the user typed.",
	"community.messages.load_failed":
		"Shown in the Messages list when the conversations could not be loaded. Pulling the list down reloads it.",
	"community.messages.yesterday":
		"Shown at the right of a conversation in the Messages list when its last message is from yesterday. Very short (about 10 characters).",
	"community.messages.type_message":
		"Placeholder in the box at the bottom of a conversation where the user writes a message.",
	"community.messages.send_failed":
		"Error dialog text when a message could not be sent. The text the user wrote stays in the box.",
	"community.messages.be_polite":
		"Notice at the top of every conversation, as on EkosLive's Messages page. One short sentence.",
	"community.messages.request_title":
		"Notice at the top of a conversation someone else started: their first message is a request the user must approve before replying. {0} is that person's name.",
	"community.messages.request_body":
		"Second line of the request notice (community.messages.request_title). Approve and Reject are the buttons under it (general.approve, general.reject).",
	"community.messages.confirm_approve":
		"Confirmation dialog title after pressing Approve (general.approve). A question.",
	"community.messages.confirm_reject":
		"Confirmation dialog title after pressing Reject (general.reject). The second sentence says the conversation disappears.",
	"community.messages.respond_failed":
		"Error dialog text when approving or rejecting a message request failed.",
	"community.messages.waiting_title":
		"Shown while the other person has not yet approved the user's first message; the user cannot send more until then. Also the placeholder of the disabled message box. Short.",
	"community.messages.waiting_body":
		"Second line of the waiting notice (community.messages.waiting_title). {0} is the other person's name.",
	"community.messages.start_conversation":
		"Shown in an empty conversation, before the first message. {0} is the other person's name.",
	"community.messages.select_conversation":
		"Shown on tablets in the right-hand pane of Messages when no conversation is open; the list and its search box are on the left.",

	// Capture settings > Guide Limits: the "Abort if guide deviation >" row (ekos.capture_limits.about_guide_deviation)
	// and the number under it, Ekos' GuideDeviationReps option
	"ekos.capture_limits.consecutive_samples":
		"Label of a number on the row under \"Abort if guide deviation >\": how many guide samples in a row must be over that limit before the exposure is aborted. About 35 characters.",
	"ekos.capture_limits.consecutive_samples_tooltip":
		"Tooltip for ekos.capture_limits.consecutive_samples. A sample is one guide measurement; \"the abort limit above\" is the value on the \"Abort if guide deviation >\" row.",

	// Capture settings: tooltips on every setting (General Settings, Auto Calibration, Guide Limits, Focus Limits)
	"ekos.collapse_camera.capture_settings.delay_tooltip":
		"Tooltip for Delay in Capture settings > General Settings: the pause before every captured image, in seconds.",
	"ekos.capture_auto_calibration.wall_tooltip":
		"Tooltip for the Wall checkbox in Capture settings > Auto Calibration, with the Az and Alt fields under it. A light box is a flat panel the app can switch on and off.",
	"ekos.capture_auto_calibration.park_mount_tooltip":
		"Tooltip for Park Mount in Capture settings > Auto Calibration. \"Wall\" is ekos.capture_auto_calibration.wall.",
	"ekos.capture_auto_calibration.park_dome_tooltip":
		"Tooltip for Park Dome in Capture settings > Auto Calibration.",
	"ekos.capture_auto_calibration.manual_tooltip":
		"Tooltip for the Manual choice under Flat Duration in Capture settings > Auto Calibration.",
	"ekos.capture_auto_calibration.adu_tooltip":
		"Tooltip for the ADU choice under Flat Duration in Capture settings > Auto Calibration. ADU is the pixel brightness unit; Auto is general.auto, shown when the value is 0.",
	"ekos.capture_auto_calibration.tolerance_tooltip":
		"Tooltip for Tolerance under Flat Duration in Capture settings > Auto Calibration. The numbers are an example in ADU.",
	"ekos.capture_auto_calibration.skyflats_tooltip":
		"Tooltip for the Sky flats checkbox in Capture settings > Auto Calibration. Twilight: the sky just after sunset or before sunrise.",
	"ekos.capture_limits.start_deviation_tooltip":
		"Tooltip for \"Only start if guide deviation <\" in Capture settings > Guide Limits. The value is in arcseconds.",
	"ekos.capture_limits.abort_deviation_tooltip":
		"Tooltip for \"Abort if guide deviation >\" in Capture settings > Guide Limits. \"The number of samples set below\" is ekos.capture_limits.consecutive_samples.",
	"ekos.capture_limits.refocus_n_tooltip":
		"Tooltip for \"Refocus every\" (minutes) in Capture settings > Focus Limits.",
	"ekos.capture_limits.focus_deltaT_tooltip":
		"Tooltip for \"Autofocus if ΔT° >\" in Capture settings > Focus Limits.",
	"ekos.capture_limits.refocus_meridian_tooltip":
		"Tooltip for \"Refocus after meridian flip\" in Capture settings > Focus Limits.",
	"ekos.capture_limits.refocus_on_hfr_tooltip":
		"Tooltip for \"Refocus on HFR. Use\" in Capture settings > Focus Limits. Last Autofocus, Fixed and Median Measure are the choices of the dropdown next to it (shown in English); HFR is the star size measure.",
	"ekos.capture_limits.hfr_percent_tooltip":
		"Tooltip for Threshold (%) in Capture settings > Focus Limits.",
	"ekos.capture_limits.check_every_tooltip":
		"Tooltip for \"Check every\" (frames) in Capture settings > Focus Limits.",
	"ekos.capture_limits.hfr_value_tooltip":
		"Tooltip for the HFR value (pixels) in Capture settings > Focus Limits. Last Autofocus, Fixed and Median Measure are the HFR check choices (shown in English).",

	// setting_tips.align: tooltips on the Align settings pages
	"setting_tips.align.profile":
		"Align > Settings > Preset tab, 'Profile' dropdown (Ekos option SolveOptionsProfile). StellarSolver is the name of the plate-solving library; 'plate solve' = astrometric solving of an image to find where it points.",
	"setting_tips.align.use_scale":
		"Align > Settings > Preset tab, 'Use Scale' checkbox (Ekos option AstrometryUseImageScale). Image scale = arcseconds per pixel / field width; index files are the star catalogue files the plate solver searches.",
	"setting_tips.align.use_position":
		"Align > Settings > Preset tab, 'Use Position' checkbox (Ekos option AstrometryUsePosition). 'Mount' = telescope mount; the position is the RA/Dec the mount reports.",
	"setting_tips.align.filter":
		"Align > Settings > Preset tab, 'Filter' dropdown (Ekos option alignFilter). 'Use the current filter' refers to Ekos' 'Use current' checkbox in its Align module, which is not in the app.",
	"setting_tips.align.accuracy":
		"Align > Settings > Preset tab, 'Accuracy' (arcsec), Ekos option alignAccuracyThreshold. 'Slew' is the solver action shown in the app's Align dropdown (key ekos.collapse_align.action_slew); use that exact translated label.",
	"setting_tips.align.settle":
		"Align > Settings > Preset tab, 'Settle' (ms), Ekos option alignSettlingTime. 'Slewing' = the mount moving to a new sky position.",
	"setting_tips.align.dark":
		"Align > Settings > Preset tab, 'Dark' On/Off switch (Ekos option alignDarkFrame). 'Dark Library' is the app screen of that name (key darkLibrary.title); a defect map is a map of hot/cold pixels.",
	"setting_tips.align.rotator_control":
		"Align > Settings > Rotator Control tab, 'Rotator Control' checkbox (Ekos option AstrometryUseRotator). 'Load & Slew' is the app's Align action (key ekos.collapse_align.load); use its translated label. Position angle = camera orientation on the sky.",
	"setting_tips.align.rotator_threshold":
		"Align > Settings > Rotator Control tab, 'Threshold' (arcminutes), Ekos option AstrometryRotatorThreshold.",

	// setting_tips.guide: tooltips on the Guide settings pages
	"setting_tips.guide.auto_star":
		"Translator note: Guide > Settings > Preset tab, 'Auto Star' checkbox. Ekos picks the guide star itself instead of waiting for the user to tap one.",
	"setting_tips.guide.subframe":
		"Translator note: Guide > Settings > Preset tab, 'Subframe' checkbox. 'Box' is the tracking box size option on the same tab; 'SEP Multi Star' is an Ekos star detection mode name, keep it in English.",
	"setting_tips.guide.box":
		"Translator note: Guide > Settings > Preset tab, 'Box' dropdown (8-128). The square drawn around the guide star that Ekos tracks. 'Subframe' is the checkbox on the same tab.",
	"setting_tips.guide.binning":
		"Translator note: Guide > Settings > Preset tab, 'Binning' switch (1x1 / 2x2 / 4x4). Keep the values '2x2' as written.",
	"setting_tips.guide.dark":
		"Translator note: Guide > Settings > Preset tab, 'Dark' ON/OFF switch. 'Dark Library' is the existing screen name (darkLibrary.title).",
	"setting_tips.guide.dither":
		"Translator note: Guide > Settings > Dither tab, 'Dither' checkbox. 'Non-Guide Dither Pulse' is another checkbox on the same tab (ekos.collapse_guide.non_guide).",
	"setting_tips.guide.dither_amount":
		"Translator note: Guide > Settings > Dither tab, the row 'by [N] pixels ... every [N] frames' under the Dither checkbox. Covers both numbers: dither distance and dither frequency.",
	"setting_tips.guide.algorithm":
		"Translator note: Guide > Settings > Advanced tab, the two 'Guiding Algorithm' dropdowns (RA and DEC). Standard, Hysteresis, Linear, GPG and AI Guider are dropdown values shown in English: keep them in English. 'Weights File' is a field on the AI Guiding tab (ekos.collapse_guide.ai.weights_file).",
	"setting_tips.guide.aggressiveness":
		"Translator note: Guide > Settings > Advanced tab, 'Aggressiveness' row with two numbers (RA left, DEC right). Proportional gain of the guider.",
	"setting_tips.guide.min_error":
		"Translator note: Guide > Settings > Advanced tab, 'Min error (arcsec)' row with two numbers (RA left, DEC right).",
	"setting_tips.guide.max_response":
		"Translator note: Guide > Settings > Advanced tab, 'Max response (arcsec)' row with two numbers (RA left, DEC right).",
	"setting_tips.guide.ra_directions":
		"Translator note: Guide > Settings > Advanced tab, 'Directions' section, RA column: ON/OFF button plus '+' and '-' buttons. Keep '+' and '-' as symbols.",
	"setting_tips.guide.dec_directions":
		"Translator note: Guide > Settings > Advanced tab, 'Directions' section, DEC column: ON/OFF button plus '+' and '-' buttons. Keep '+' and '-' as symbols.",
	"setting_tips.guide.pulse":
		"Translator note: Guide > Settings > Calibration tab, 'Pulse' number (milliseconds).",
	"setting_tips.guide.iterations":
		"Translator note: Guide > Settings > Calibration tab, 'Iterations' number. 'Max Move' is the option just below it (ekos.collapse_align.calibration_settings.max_move).",
	"setting_tips.guide.max_move":
		"Translator note: Guide > Settings > Calibration tab, 'Max Move' number (pixels). 'Iterations' is the option just above it (ekos.collapse_align.calibration_settings.iterations).",
	"setting_tips.guide.two_axis":
		"Translator note: Guide > Settings > Calibration tab, 'Two axis' checkbox.",
	"setting_tips.guide.auto_square_size":
		"Translator note: Guide > Settings > Calibration tab, 'Auto square size' checkbox. The 'square' is the guide star tracking box.",
	"setting_tips.guide.reset_calibration":
		"Translator note: Guide > Settings > Calibration tab, 'Reset Guide Calibration After Each Mount Slew' checkbox. Quotes the label of another checkbox on the same tab (ekos.collapse_align.calibration_settings.reuse_calibration).",
	"setting_tips.guide.weights_file":
		"Translator note: Guide > Settings > AI Guiding tab, 'Weights File' path with a folder button. 'AI Guiding Assistant' is the existing tool name (ekos.collapse_guide.ai.assistant). 'Gains' here means the guiding gains/camera gain recorded with the model.",
	"setting_tips.guide.prediction_gain":
		"Translator note: Guide > Settings > AI Guiding tab, 'AI Prediction Gain' number.",
	"setting_tips.guide.dark_guiding_interval":
		"Translator note: Guide > Settings > AI Guiding tab, 'Dark Guiding Interval' number (seconds). Quotes the 'Enable Predictive Dark Guiding' checkbox on the same tab (ekos.collapse_guide.ai.enable_dark_guiding).",
	"setting_tips.guide.proportional_backoff":
		"Translator note: Guide > Settings > AI Guiding tab, 'Scale down Proportional gain during AI ...' checkbox. 'Proportional correction' is the normal (non-AI) guide correction set by Aggressiveness.",
	"setting_tips.guide.dark_guiding":
		"Translator note: Guide > Settings > AI Guiding tab, 'Enable Predictive Dark Guiding' checkbox. 'AI Guider' is a value of the RA algorithm dropdown on the Advanced tab, shown in English: keep it in English.",

	// setting_tips.focus: tooltips on the Focus settings pages
	"setting_tips.focus.auto_select_star":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Auto Select Star' checkbox (Ekos option focusAutoStarEnabled). 'Sub Frame' and 'Bahtinov' refer to the Sub Frame option and the Bahtinov detection method.",
	"setting_tips.focus.dark_frame":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Dark Frame' checkbox (useFocusDarkFrame). 'Dark Library' is the app's Dark Library tool.",
	"setting_tips.focus.sub_frame":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Sub Frame' radio button and the 'Box' size next to it (focusSubFrame, focusBoxSize). 'Box' is the label of the size control on the same row.",
	"setting_tips.focus.full_field":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Full Field' radio button (focusUseFullField). Names the Ring Mask, Mosaic Mask and Use Weights options.",
	"setting_tips.focus.suspend_guiding":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Suspend Guiding' checkbox (focusSuspendGuiding). OAG = off-axis guider.",
	"setting_tips.focus.guide_settle":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Settle' number below Suspend Guiding (focusGuideSettleTime, seconds).",
	"setting_tips.focus.use_all_stars":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Use all stars for focusing' radio button in the Mask section (focusNoMaskRB).",
	"setting_tips.focus.ring_mask":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Ring Mask' radio button and its two % values (focusRingMaskRB, focusFullFieldInnerRadius, focusFullFieldOuterRadius).",
	"setting_tips.focus.mosaic_mask":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Mosaic Mask' radio button and its two values (focusMosaicMaskRB, focusMosaicTileWidth in %, focusMosaicSpace in pixels).",
	"setting_tips.focus.adaptive_focus":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Adaptive Focus' checkbox (focusAdaptive). 'Linear 1 Pass' is an algorithm name shown in English. 'Ekos filter settings' are the per-filter settings (temperature/altitude coefficients) in Ekos.",
	"setting_tips.focus.min_move":
		"Focus > Settings > Advanced Settings tab. Tooltip for 'Min. Move' next to Adaptive Focus (focusAdaptiveMinMove, focuser steps/ticks).",
	"setting_tips.focus.adapt_start":
		"Focus > Settings > Advanced Settings tab. Tooltip for the 'Adap Start Pos' checkbox (focusAdaptStart).",
	"setting_tips.focus.max_move":
		"Focus > Settings > Advanced Settings tab. Tooltip for 'Max Total Move' (focusAdaptiveMaxMove, focuser steps/ticks). 'Adap Start Pos' is the checkbox on the same row.",
	"setting_tips.focus.detection":
		"Focus > Settings > Process tab. Tooltip for the 'Detection' dropdown (focusDetection). SEP, Gradient, Threshold and Bahtinov are dropdown values shown in English.",
	"setting_tips.focus.sep_profile":
		"Focus > Settings > Process tab. Tooltip for the 'SEP Profile' dropdown (focusSEPProfile). StellarSolver is the name of the star-extraction library.",
	"setting_tips.focus.algorithm":
		"Focus > Settings > Process tab. Tooltip for the 'Algorithm' dropdown (focusAlgorithm). Iterative, Polynomial, Linear and Linear 1 Pass are dropdown values shown in English.",
	"setting_tips.focus.curve_fit":
		"Focus > Settings > Process tab. Tooltip for the 'Curve Fit' dropdown (focusCurveFit). Quadratic, Hyperbola, Parabola and the algorithm names are shown in English.",
	"setting_tips.focus.average_over":
		"Focus > Settings > Process tab. Tooltip for 'Average Over' (focusFramesCount, number of frames). Appears twice on the tab.",
	"setting_tips.focus.tolerance":
		"Focus > Settings > Process tab. Tooltip for 'Tolerance' (focusTolerance, %). Hidden when the algorithm is Linear 1 Pass.",
	"setting_tips.focus.num_of_rows":
		"Focus > Settings > Process tab. Tooltip for 'Num. of Rows' (focusMultiRowAverage), shown only with Bahtinov detection. 'Diffraction spikes' are the lines made by a Bahtinov mask.",
	"setting_tips.focus.kernel_size":
		"Focus > Settings > Process tab. Tooltip for 'Kernel Size' (focusGaussianKernelSize), shown only with Bahtinov detection.",
	"setting_tips.focus.sigma":
		"Focus > Settings > Process tab. Tooltip for 'Sigma' (focusGaussianSigma), shown only with Bahtinov detection.",
	"setting_tips.focus.use_weights":
		"Focus > Settings > Process tab. Tooltip for the 'Use Weights' checkbox (focusUseWeights). 'Full Field' is the option on the Advanced Settings tab.",
	"setting_tips.focus.r2_limit":
		"Focus > Settings > Process tab. Tooltip for 'R² Limit' (focusR2Limit, 0 to 1). R² is the coefficient of determination of the curve fit.",
	"setting_tips.focus.refine_curve_fit":
		"Focus > Settings > Process tab. Tooltip for the 'Refine Curve Fit' checkbox (focusRefineCurveFit). Peirce's criterion is a statistical outlier test.",
	"setting_tips.focus.average_hfr_check":
		"Focus > Settings > Process tab. Tooltip for 'Average HFR Check' (focusHFRFramesCount, number of frames). The in-sequence HFR check runs between frames of a capture sequence.",
	"setting_tips.focus.threshold":
		"Focus > Settings > Process tab. Tooltip for 'Threshold' (focusThreshold, %), shown only when Detection is 'Threshold' (a dropdown value shown in English).",
	"setting_tips.focus.donut_buster":
		"Focus > Settings > Donut Buster tab. Tooltip for the 'Donut Buster' checkbox (focusDonut). 'Walk' is the Mechanics-tab dropdown label, shown in English like its values Fixed Steps and CFZ Shuffle.",
	"setting_tips.focus.time_dilation":
		"Focus > Settings > Donut Buster tab. Tooltip for 'Time Dilation x' (focusTimeDilation, a multiplier of the exposure time).",
	"setting_tips.focus.outlier_rejection":
		"Focus > Settings > Donut Buster tab. Tooltip for 'Outlier Rejection' (focusOutlierRejection, a fraction 0 to 0.4). 'Refine Curve Fit' is the checkbox on the Process tab.",
	"setting_tips.focus.scan_start_pos":
		"Focus > Settings > Donut Buster tab. Tooltip for the 'Scan for Start Position' checkbox (focusScanStartPos).",
	"setting_tips.focus.scan_datapoints":
		"Focus > Settings > Donut Buster tab. Tooltip for 'Num datapoints' (focusScanDatapoints).",
	"setting_tips.focus.scan_step_factor":
		"Focus > Settings > Donut Buster tab. Tooltip for 'Initial Step Size x' (focusScanStepSizeFactor, a multiplier). 'Initial Step Size' is the option on the Mechanics tab.",
	"setting_tips.focus.scan_always_on":
		"Focus > Settings > Donut Buster tab. Tooltip for the 'Always on' checkbox below Scan for Start Position (focusScanAlwaysOn).",
	"setting_tips.focus.walk":
		"Focus > Settings > Mechanics tab. Tooltip for the 'Walk' dropdown (focusWalk). The label 'Walk' and the values Classic, Fixed Steps and CFZ Shuffle are shown in English. 'Number Steps' is the option on the same tab.",
	"setting_tips.focus.focuser_settle":
		"Focus > Settings > Mechanics tab. Tooltip for 'Settle' (focusSettleTime, seconds; called 'Focuser Settle' in Ekos).",
	"setting_tips.focus.initial_step_size":
		"Focus > Settings > Mechanics tab. Tooltip for 'Initial Step Size' (focusTicks, focuser steps/ticks, or milliseconds for timer-based focusers).",
	"setting_tips.focus.number_steps":
		"Focus > Settings > Mechanics tab. Tooltip for 'Number Steps' (focusNumSteps). Walk values Fixed Steps, CFZ Shuffle and Classic are shown in English.",
	"setting_tips.focus.max_travel":
		"Focus > Settings > Mechanics tab. Tooltip for 'Max Travel' (focusMaxTravel, focuser steps/ticks).",
	"setting_tips.focus.max_step_size":
		"Focus > Settings > Mechanics tab. Tooltip for 'Max Step Size' (focusMaxSingleStep, focuser steps/ticks).",
	"setting_tips.focus.backlash":
		"Focus > Settings > Mechanics tab. Tooltip for 'Backlash' (focusBacklash; 'Driver Backlash' in Ekos, written to the INDI focuser driver). 'AF Overscan' is the option on the same tab.",
	"setting_tips.focus.af_overscan":
		"Focus > Settings > Mechanics tab. Tooltip for 'AF Overscan' (focusAFOverscan, focuser steps/ticks). 'Backlash' is the option on the same tab.",
	"setting_tips.focus.capture_timeout":
		"Focus > Settings > Mechanics tab. Tooltip for 'Capture timeout' (focusCaptureTimeout, seconds).",
	"setting_tips.focus.overscan_delay":
		"Focus > Settings > Mechanics tab. Tooltip for 'Overscan Delay' (focusOverscanDelay, seconds). 'AF Overscan' is the option on the same tab.",
	"setting_tips.focus.motion_timeout":
		"Focus > Settings > Mechanics tab. Tooltip for 'Motion timeout' (focusMotionTimeout, seconds).",
	// Guide settings > AI Guiding tab
	"ekos.collapse_guide.ai.title":
		"Title of the section on the AI Guiding tab of Guide settings, as in Ekos (\"AI Guiding Configuration\"). Short.",
	"ekos.collapse_align.calibration_settings.reset_on_rotation":
		"Checkbox in Guide settings > Calibration Settings: clear the guide calibration when the camera field rotates (rotator or by hand). Next to reset_calibration (\"after each mount slew\").",
	"setting_tips.guide.reset_on_rotation":
		"Tooltip for ekos.collapse_align.calibration_settings.reset_on_rotation. The position angle is the camera orientation found by plate solving.",
	"ekos.collapse_align.use_current_filter":
		"First choice of the Filter dropdown in Align settings > Preset: align with whatever filter is in the wheel instead of a fixed one (Ekos' \"Use current\" box). Short (about 25 characters).",
	"setting_tips.focus.out_step_multiple":
		"Tooltip for Out Step Multiple in Focus settings > Mechanics (ekos.collapse_focus.mechanics.out_step_multiple). \"Classic\" is a walk name shown in English; \"Initial Step Size\" is ekos.collapse_focus.mechanics.initial_step_size.",
};

export default context;
