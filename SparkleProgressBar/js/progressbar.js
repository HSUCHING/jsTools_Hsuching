/**
 * Created by i068959 on 15/9/24.
 */
$(function () {

	$('.progressbar').each(function () {
		var t = $(this),
			dataperc = t.attr('data-perc'),
			barperc = Math.round(dataperc * 5.56);
		t.find('.bar').animate({width: barperc}, dataperc * 25);
		t.find('.label').append('<div class="perc"></div>');

		var r_c_s = 232;
		var g_c_s = 25;
		var b_c_s = 87;
		var a_c_s = 1;

		var r_c_e = 126;
		var g_c_e = 234;
		var b_c_e = 25;
		var a_c_e = 1;

		var r_c_s_2 = 170;
		var g_c_s_2 = 0;
		var b_c_s_2 = 51;
		var a_c_s_2 = 1;

		var r_c_e_2 = 83;
		var g_c_e_2 = 173;
		var b_c_e_2 = 0;
		var a_c_e_2 = 1;

		function perc() {
			var length = t.find('.bar').css('width'),
				perc = Math.round(parseInt(length) / 5.56),
				labelpos = (parseInt(length) - 2);
			var rgba_s = "rgba(" + (r_c_s - Math.round(perc * (r_c_s - r_c_e) / 100)) + "," + (g_c_s + Math.round(perc * (g_c_e - g_c_s) / 100)) + "," + (b_c_s - Math.round(perc * (b_c_s - b_c_e) / 100)) + "," + a_c_s + ")";
			var rgba_e = "rgba(" + (r_c_s_2 - Math.round(perc * (r_c_s_2 - r_c_e_2) / 100)) + "," + (g_c_s_2 + Math.round(perc * (g_c_e_2 - g_c_s_2) / 100)) + "," + (b_c_s_2 - Math.round(perc * (b_c_s_2 - b_c_e_2) / 100)) + "," + a_c_s_2 + ")";
			t.find('.bar').css('background', "linear-gradient(to bottom, " + rgba_s + " 0%," + rgba_e + " 100%)");
			t.find('.bar').css('box-shadow', "0px 0px 12px 0px " + rgba_s + ",inset 0px 1px 0px 0px rgba(255, 255, 255, 0.45),inset 1px 0px 0px 0px rgba(255, 255, 255, 0.25),inset -1px 0px 0px 0px rgba(255, 255, 255, 0.25)");
			t.find('.label').css('left', labelpos);
			t.find('.label').css('background', "linear-gradient(to bottom, " + rgba_s + " 0%," + rgba_e + " 100%)");
			t.find('.label').css('box-shadow', "0px 0px 12px 0px " + rgba_s + ",inset 0px 1px 0px 0px rgba(255, 255, 255, 0.45),inset 1px 0px 0px 0px rgba(255, 255, 255, 0.25),inset -1px 0px 0px 0px rgba(255, 255, 255, 0.25)");
			t.find('.perc').text(perc + '%');
		}

		perc();
		setInterval(perc, 0);
	});
});