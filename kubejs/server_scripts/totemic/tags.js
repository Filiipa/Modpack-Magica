// priority: 0
"use strict";

function registerTotemicItemTags(event) {

	// #region Fix Totemic Leather

	event.remove('c:leathers', 'totemic:buffalo_hide')

    //#endregion

	event.remove('totemic:zaphkiel_waltz_growable', 'totemic:cedar_sapling')
	event.add('totemic:zaphkiel_waltz_growable', 'afc:wood/sapling/redcedar')

}