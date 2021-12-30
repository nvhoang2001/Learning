index.html (Dòng bị comment và dòng ngay dưới nó có kết quả gần tương đương nhau):

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
			<h1>Vue Course Goals</h1>
		</header>
		<section id="user-goal">
			<h2>My Course Goal</h2>
			<p>{{message.join("")}}</p>
			<p>More about Vue <a v-bind:href="vueLink+'.org'" target="_blank">go to</a></p>
			<!-- <p v-html="'Learn ' + outputGoal()"></p> -->
			<p>{{'Learn ' + outputGoal()}}</p>
			<p>{{simpleFunc()}}</p>
		</section>
	</body>
</html>
```

app.js:

```js
const app = Vue.createApp({
	data() {
		return {
			message: ["Simple", " Vue ", "app"],
			vueLink: "http://vuejs",
			goalA: "Vue2",
			goalB: "Vue3",
		};
	},
	methods: {
		outputGoal() {
			const ranNum = Math.random();
			return ranNum < 0.5 ? this.goalA : this.goalB;
		},
		simpleFunc() {
			return "Simple Function 2";
		},
	},
});

app.mount("#user-goal");
```

1. Interpolation:
   Bên trong {{ }} không chỉ là data property [^1], mà là một biểu thức Js, vậy nên {{message.join("")}}, {{'Learn ' + outputGoal()}} đều không bị lỗi
2. Directive:

-   v-bind: Đối với các html attribute, không thể sử dụng {{}} như `<a href="{{vueLink+'.org'}}" target="_blank">go to</a></p>`, vì khi này, Vue sẽ bỏ qua {{ }} mà không tính giá trị biểu thức bên trong nó, dẫn đến trường hợp sai đường link, để Vue tính giá trị của một biểu thức bên trong HTML attribute, sử dụng v-bind:att (att là attribute cần tính), ví dụ: `<a v-bind:href="vueLink+'.org'" target="_blank">go to</a></p>` sẽ thành `<a href="http://vuejs.org" target="_blank">go to</a></p>`
-   v-html: trong một số trường hợp, giá trị của biểu thức cần tính là một đoạn code HTML, nếu để bên trong {{ }}, khi này, đoạn code đó sẽ được coi là một chuỗi ký tự và hiển thị trực tiếp. Để Vue hiểu rằng đây là một đoạn code HTML, sử dụng v-html, ví dụ: `<p v-html="'Learn ' + outputGoal()"></p>`, khi này Vue sẽ tính giá trị của `'Learn ' + outputGoal()` và ghi vào bên trong thẻ p như một đoạn HTML (tương tự trong Js thuần `p.innerHTML = 'Learn ' + outputGoal()`)

[^1] data property: propert của object được trả về của data
