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
};

export default context;
