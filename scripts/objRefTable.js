const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Behaviors.MoveTo,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Touch,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.Text.Acts.SetX,
		C3.Plugins.Text.Acts.SetY,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Text.Exps.Opacity
	];
};
self.C3_JsPropNameTable = [
	{kitty: 0},
	{nuketext: 0},
	{MoveTo: 0},
	{lenuke: 0},
	{Mouse: 0},
	{flash: 0},
	{explosion: 0},
	{Audio: 0},
	{silicone: 0},
	{siliconetext: 0},
	{Touch: 0}
];

self.InstanceType = {
	kitty: class extends self.ISpriteInstance {},
	nuketext: class extends self.ITextInstance {},
	lenuke: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	flash: class extends self.ISpriteInstance {},
	explosion: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	silicone: class extends self.ISpriteInstance {},
	siliconetext: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {}
}