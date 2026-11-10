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

	// Live stacking: Masters dialog
	"ekos.livestacking.master_files":
		"Title of the dialog where the master calibration files for live stacking are chosen.",
	"ekos.livestacking.dark_master":
		"Label for the master DARK file (an averaged dark frame) subtracted from each live-stacked frame.",
	"ekos.livestacking.dark_flat":
		"Label for the master FLAT file (an averaged flat frame) used to correct vignetting and dust. Not a \"dark flat\": the key name is historical.",
};

export default context;
