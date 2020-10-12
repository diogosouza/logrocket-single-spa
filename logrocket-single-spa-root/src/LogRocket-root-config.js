import { registerApplication, start } from "single-spa";

registerApplication({
	name: "@LogRocket/logrocket-single-spa-navbar",
	app: () => System.import("@LogRocket/logrocket-single-spa-navbar"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@LogRocket/logrocket-single-spa-homepage",
	app: () => System.import("@LogRocket/logrocket-single-spa-homepage"),
	activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
	name: "@LogRocket/logrocket-single-spa-aboutpage",
	app: () => System.import("@LogRocket/logrocket-single-spa-aboutpage"),
	activeWhen: ["/about"],
});

registerApplication({
	name: "@LogRocket/logrocket-single-spa-contactpage",
	app: () => System.import("@LogRocket/logrocket-single-spa-contactpage"),
	activeWhen: ["/contact"],
});

start({
	urlRerouteOnly: true,
});
