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
};

export default context;
