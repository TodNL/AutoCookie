toggled = false

register('tick', () => {
	if (!toggled) return
	let inv = Player.getContainer()
	if (inv === undefined) return
	if (inv.getName().indexOf('Cookie Clicker') !== 0) return
	inv.click(13, false, 'MIDDLE')
})

register('command', () => {
	ChatLib.chat('&7AutoCookie toggled ' + ((toggled = !toggled) ? '&aON' : '&cOFF'))
}).setName('cookies')
