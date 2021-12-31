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

Event: Để lắng nghe các sự kiện trong của element với Vue, ta sử dụng directive `v-on:event`, trong đó `event` là sự kiện mà ta muốn xử lý, ví dụ `v-on:click` để lắng nghe sự kiện click trên element.
Ngoài ra, Vue còn sử dụng một cú pháp khác để lắng nghe sự kiện, đó là `@event`, với `event` là sự kiện ta muốn lắng nghe, `v-on:event` và `@event` đều giống nhau, chúng đều là lắng nghe sự kiện trong Vue.
Để gọi hàm xử lý sự kiện eventHandler, gán `v-on:event="eventHandler"`, khi này, Vue sẽ gán hàm xử lý sự kiện trên element như `element.onevent = eventHandler` (Js thuần). Ngoài ra, ta cũng có thể gọi hàm và truyền vào đối số như trong Js thuần (`onevent="eventHandler"`).
Trong một số trường hợp, ta có thể sẽ cần đến event object của element bên trong hàm xử lý xự kiện(ví dụ: để lấy giá trị của ô input, ...), và đồng thời cũng cần truyền vào đối số cho hàm, Vue cùng cấp một biến đặc biệt để lấy event object của element là `$event`. Khi gọi hàm, ta truyền các đối số cần thiết và `$event` để lấy event object của element, ví dụ `@click="increase($event, 10)"`.

v-once: Trong một số trường hợp, có thể ta sẽ cần lưu giá trị ban đầu của một data property vào một element, và giữ nguyên nội dung element đó dù sau đó data propety đó có thể đã thay đổi, nhưng không muốn tạo thêm một data property khác, trong trường hợp này, ta cần đến `v-once`. trong lần chạy đầu tiên, `v-once` sẽ lưu giá trị của các data property được sử dụng bên trong element, và sau đó sẽ giữ nguyên giá trị đó dù data property đã thay đổi.

v-model: Khi muốn kết nối giá trị bên trong một ô input với một data property, khi 1 bên thay đổi, bên còn lại cũng sẽ thay đổi, thì ngoài sử dụng `:value` kết hợp với `@input`, thì ta có thể sử dụng `v-model`. `v-model` sẽ kết nối giá trị của ô input với data property, khi một bên thay đổi, bên còn lại cũng sẽ thay đổi, đây được gọi là two way binding.

Event modifier: để các hàm xử lý sự kiện tập trung vào xử lý sự kiện thay vì xử lý cả các default behavior, Vue cung cấp các event modifier, event modifier sẽ tự gọi đến các event method tương ứng mà ta không cần phải gọi trong hàm xử lý sự kiện. Ví dụ `v-on:submit.prevent` sẽ tự gọi `event.preventDefault()` mà ta không cần phải gọi đến nó. Ngoài ra, ta cũng có thể nối liên tiếp các modifier với nhau như `v-on:submit.prevent.stop`.

Computed property: Mỗi khi có một data property thay đổi, Vue sẽ chạy lại toàn bộ method ở trong element mà nó giám sát, ngoại trừ các event handler. Ví dụ:

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

Khi name hoặc lastName thay đổi giá trị, outputFullname sẽ được chạy lại để tính ra giá trị mới. Nhưng, khi counter thay đổi giá trị, outputFullname vẫn sẽ được chạy lại(có thể ảnh hưởng đến hiệu suất). Để tránh điều này xảy ra, ta thêm phương thức fullname như sau:

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

Thay các lời gọi hàm `outputFullname()` với `fullname`, bây giờ, mỗi khi một data property được thay đổi, Vue sẽ kiểm tra nó có phải là dependency của `fullname` hay không rồi mới quyết định gọi lại `fullname` hay không. Lúc này, `fullname` được gọi là computed property. Chúng là các method mà Vue sẽ gọi lại khi mà 1 dependency có mặt trong nó bị thay đổi.

Watcher: watcher là các method có tên giống với tên data property, chúng sẽ được gọi lại khi data property tương ứng bị thay đổi giá trị, được dùng để kiểm tra, xử lý giá trị của data property khi chúng thay đổi. Watcher có 2 tham số, tham số đầu tiên là giá trị của data property sau khi thay đổi, và tham số thứ 2 là giá trị của data propert trước khi thay đổi.

Sự khác nhau giữa watcher với computed property: watcher sẽ chỉ có duy nhất 1 dependency, là data property mà nó sẽ theo dõi. Còn computed property thì có thể có nhiều hơn 1 dependency.
