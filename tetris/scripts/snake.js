T = 0;

function G() {
	function q(a, b) {
		return a[0] == b[0] && a[1] == b[1]
	}

	function l(a) {
		return a[a.length - 1]
	}

	function R() {
		with(Math) return [floor(50 * random()), floor(50 * random())]
	}
	x = c.getContext("2d"), c.width = c.height = 500, d = [1, 0], s = [
		[4, 4],
		[5, 4],
		[6, 4]
	], f = [20, 15], onkeydown = function (a) {
		w = a.which, t = w > 36 && 41 > w ? w % 2 ? [w - 38, 0] : [0, w - 39] : d, d = q([-1 * d[0], -1 * d[1]], t) ? d : t
	};
	if (!T) T = setInterval(function () {
		x.clearRect(0, 0, 500, 500), x.fillRect(10 * f[0], 10 * f[1], 10, 10), _ = l(s);
		for (i in s) e = s[i], x.fillRect(10 * e[0], 10 * e[1], 10, 10), i < s.length - 1 && q(_, e) ? G() : 0;
		q(_, f) ? f = R() : s.shift(), s.push([l(s)[0] + d[0], l(s)[1] + d[1]]), h = l(s), h[0] < 0 || h[1] < 0 || h[0] > 50 || h[1] > 50 ? G() : 0
	}, 55)
}
G()