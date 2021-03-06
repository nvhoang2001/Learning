index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vue Basics</title>
		<link
			href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="styles.css" />
		<script src="https://unpkg.com/vue@next" defer></script>
		<script src="app.js" defer></script>
	</head>
	<body>
		<header>
			<h1>Vue Events</h1>
		</header>
		<section id="events">
			<h2>Events in Action</h2>
			<button @click="increase(10)">Add 10</button>
			<button v-on:click="decrease(5)">Reduce 5</button>
			<p v-once>Initial counter: {{ counter }}</p>
			<p>Result: {{ counter }}</p>
			<!-- <input type="text" v-bind:value="name" v-on:input="setName($event)" /> -->
			<input type="text" v-model="name" />
			<input type="text" v-model="lastName" />
			<p>Your name {{fullname}}</p>
			<button v-on:click="resetInput">Reset Input</button>
			<!-- <form v-on:submit.prevent="submitForm">
				<input type="text" />
				<button>Sign Up</button>
			</form> -->
		</section>
	</body>
</html>
```

app.js

```js
const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			confirmName: "",
			// fullname: "",
			lastName: "",
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		// name(value, oldValue) {
		// 	console.log(oldValue);
		// 	console.log(value);
		// 	if (value === "") {
		// 		this.fullname = "";
		// 	} else {
		// 		this.fullname = "123" + " " + value;
		// 	}
		// },
	},
	computed: {
		fullname() {
			console.log("Name is leveraging");
			return this.name === "" || this.lastName === "" ? "" : `${this.lastName} ${this.name}`;
		},
	},
	methods: {
		increase(amount) {
			this.counter += amount;
		},
		decrease(amount) {
			this.counter -= amount;
		},
		setName(e) {
			this.name = e.target.value;
		},
		submitForm(e) {
			// e.preventDefault();
			console.log(e);
		},
		updateName() {
			this.confirmName = this.name;
		},
		resetInput() {
			this.name = "";
		},
		outputFullname() {
			console.log("Name is leveraging");
			return this.name === "" ? "" : `${this.lastName} ${this.name}`;
		},
	},
});

app.mount("#events");
```

Event: ?????? l????ng nghe ca??c s???? ki????n trong cu??a element v????i Vue, ta s???? du??ng directive `v-on:event`, trong ??o?? `event` la?? s???? ki????n ma?? ta mu????n x???? ly??, vi?? du?? `v-on:click` ?????? l????ng nghe s???? ki????n click tr??n element.
Ngoa??i ra, Vue co??n s???? du??ng m????t cu?? pha??p kha??c ?????? l????ng nghe s???? ki????n, ??o?? la?? `@event`, v????i `event` la?? s???? ki????n ta mu????n l????ng nghe, `v-on:event` va?? `@event` ??????u gi????ng nhau, chu??ng ??????u la?? l????ng nghe s???? ki????n trong Vue.
?????? go??i ha??m x???? ly?? s???? ki????n eventHandler, ga??n `v-on:event="eventHandler"`, khi na??y, Vue se?? ga??n ha??m x???? ly?? s???? ki????n tr??n element nh?? `element.onevent = eventHandler` (Js thu????n). Ngoa??i ra, ta cu??ng co?? th???? go??i ha??m va?? truy????n va??o ??????i s???? nh?? trong Js thu????n (`onevent="eventHandler"`).
Trong m????t s???? tr??????ng h????p, ta co?? th???? se?? c????n ??????n event object cu??a element b??n trong ha??m x???? ly?? x???? ki????n(vi?? du??: ?????? l????y gia?? tri?? cu??a ?? input, ...), va?? ??????ng th????i cu??ng c????n truy????n va??o ??????i s???? cho ha??m, Vue cu??ng c????p m????t bi????n ??????c bi????t ?????? l????y event object cu??a element la?? `$event`. Khi go??i ha??m, ta truy????n ca??c ??????i s???? c????n thi????t va?? `$event` ?????? l????y event object cu??a element, vi?? du?? `@click="increase($event, 10)"`.

v-once: Trong m????t s???? tr??????ng h????p, co?? th???? ta se?? c????n l??u gia?? tri?? ban ??????u cu??a m????t data property va??o m????t element, va?? gi???? nguy??n n????i dung element ??o?? du?? sau ??o?? data propety ??o?? co?? th???? ??a?? thay ??????i, nh??ng kh??ng mu????n ta??o th??m m????t data property kha??c, trong tr??????ng h????p na??y, ta c????n ??????n `v-once`. trong l????n cha??y ??????u ti??n, `v-once` se?? l??u gia?? tri?? cu??a ca??c data property ????????c s???? du??ng b??n trong element, va?? sau ??o?? se?? gi???? nguy??n gia?? tri?? ??o?? du?? data property ??a?? thay ??????i.

v-model: Khi mu????n k????t n????i gia?? tri?? b??n trong m????t ?? input v????i m????t data property, khi 1 b??n thay ??????i, b??n co??n la??i cu??ng se?? thay ??????i, thi?? ngoa??i s???? du??ng `:value` k????t h????p v????i `@input`, thi?? ta co?? th???? s???? du??ng `v-model`. `v-model` se?? k????t n????i gia?? tri?? cu??a ?? input v????i data property, khi m????t b??n thay ??????i, b??n co??n la??i cu??ng se?? thay ??????i, ????y ????????c go??i la?? two way binding.

Event modifier: ?????? ca??c ha??m x???? ly?? s???? ki????n t????p trung va??o x???? ly?? s???? ki????n thay vi?? x???? ly?? ca?? ca??c default behavior, Vue cung c????p ca??c event modifier, event modifier se?? t???? go??i ??????n ca??c event method t????ng ????ng ma?? ta kh??ng c????n pha??i go??i trong ha??m x???? ly?? s???? ki????n. Vi?? du?? `v-on:submit.prevent` se?? t???? go??i `event.preventDefault()` ma?? ta kh??ng c????n pha??i go??i ??????n no??. Ngoa??i ra, ta cu??ng co?? th???? n????i li??n ti????p ca??c modifier v????i nhau nh?? `v-on:submit.prevent.stop`.

Computed property: M????i khi co?? m????t data property thay ??????i, Vue se?? cha??y la??i toa??n b???? method ???? trong element ma?? no?? gia??m sa??t, ngoa??i tr???? ca??c event handler. Vi?? du??:

```html
<section id="events">
	<h2>Events in Action</h2>
	<button @click="increase(10)">Add 10</button>
	<button v-on:click="decrease(5)">Reduce 5</button>
	<p v-once>Initial counter: {{ counter }}</p>
	<p>Result: {{ counter }}</p>
	<input type="text" v-model="name" />
	<input type="text" v-model="lastName" />
	<p>Your name {{ outputFullname() }}</p>
	<button v-on:click="resetInput">Reset Input</button>
</section>
```

Khi name ho????c lastName thay ??????i gia?? tri??, outputFullname se?? ????????c cha??y la??i ?????? ti??nh ra gia?? tri?? m????i. Nh??ng, khi counter thay ??????i gia?? tri??, outputFullname v????n se?? ????????c cha??y la??i(co?? th???? a??nh h??????ng ??????n hi????u su????t). ?????? tra??nh ??i????u na??y xa??y ra, ta th??m ph????ng th????c fullname nh?? sau:

```js
const app = Vue.createApp({
	data() {
		/* ... */
	},

	computed: {
		fullname() {
			console.log("Name is leveraging");
			return this.name === "" || this.lastName === "" ? "" : `${this.lastName} ${this.name}`;
		},
	},
	methods: {
		outputFullname() {
			/* .... */
		},
	},
});
```

Thay ca??c l????i go??i ha??m `outputFullname()` v????i `fullname`, b??y gi????, m????i khi m????t data property ????????c thay ??????i, Vue se?? ki????m tra no?? co?? pha??i la?? dependency cu??a `fullname` hay kh??ng r????i m????i quy????t ??i??nh go??i la??i `fullname` hay kh??ng. Lu??c na??y, `fullname` ????????c go??i la?? computed property. Chu??ng la?? ca??c method ma?? Vue se?? go??i la??i khi ma?? 1 dependency co?? m????t trong no?? bi?? thay ??????i.

Watcher: watcher la?? ca??c method co?? t??n gi????ng v????i t??n data property, chu??ng se?? ????????c go??i la??i khi data property t????ng ????ng bi?? thay ??????i gia?? tri??, ????????c du??ng ?????? ki????m tra, x???? ly?? gia?? tri?? cu??a data property khi chu??ng thay ??????i. Watcher co?? 2 tham s????, tham s???? ??????u ti??n la?? gia?? tri?? cu??a data property sau khi thay ??????i, va?? tham s???? th???? 2 la?? gia?? tri?? cu??a data propert tr??????c khi thay ??????i.

S???? kha??c nhau gi????a watcher v????i computed property: watcher se?? chi?? co?? duy nh????t 1 dependency, la?? data property ma?? no?? se?? theo do??i. Co??n computed property thi?? co?? th???? co?? nhi????u h??n 1 dependency.
