import React from "react";
import { Typography, Container, List, ListItem } from "@mui/material";

const PaymentAndDelivery = () => {
	return (
		<Container>
			<Typography textTransform="uppercase" variant="h5">
				Доставка
			</Typography>
			<Typography
				variant="subtitle2"
				fontWeight="fontWeightRegular"
				fontFamily="Open Sans, sans-serif"
				color="grey"
				pb={3}
				align="justify"
			>
				На сьогодні наш інтернет-магазин радо надасть Вам декілька способів доставки Вашого
				замовлення.
			</Typography>
			<Typography
				variant="subtitle2"
				fontWeight="fontWeightBolt"
				fontFamily="Open Sans, sans-serif"
				color="secondary"
				align="justify"
			>
				Доставка замовлення в м. Київ:
			</Typography>
			<List
				sx={{
					color: "grey",
					fontFamily: "Open Sans, sans-serif",
					fontSize: "14px",
					fontWeight: "fontWeightRegular",
					padding: "0 0 40px 0",
				}}
			>
				<ListItem divider={true}>
					Ви можете отримати замовлення власноруч в нашому магазині в м. Київ. При готовності
					замовлення Вам буде надіслано смс-повідомлення або здійснено телефонний дзвінок. Ваше
					замовлення очікує в магазині 3 календарні дні, після чого автоматично розформовується.
					Магазин знаходиться на вулиці Козаків 20.
					<i>Додаткова плата за доставку не стягується.</i>
				</ListItem>
				<ListItem divider={true}>
					Доставка замовлення до будь-якої станції метро в м.Київ. Обравши варіант (Курєр по Києву
					по метро). Ви заберете замовлення на зручній для Вас станції метро ( у вестибюлі станції
					метро ). Ви можете вказати назву станції в коментарях до замовлення чи дочекатися дзвінка
					нашого менеджера.
					<i>Вартість доставки складає 75 грн.</i>
				</ListItem>
				<ListItem divider={true}>
					Доставка замовлення за вказаною Вами адресою. Обравши при оформленні замовлення (Курєр по
					Києву до дверей), Вы отримаєте замовлення безпосередньо за вказаною Вами адресою (дім,
					робота). <i>Вартість доставки становить 125 грн.</i>
				</ListItem>
			</List>
			<Typography
				variant="subtitle2"
				fontWeight="fontWeightBolt"
				fontFamily="Open Sans, sans-serif"
				color="secondary"
				align="justify"
			>
				Доставка замовлень по Україні:
			</Typography>
			<List
				sx={{
					color: "grey",
					fontFamily: "Open Sans, sans-serif",
					fontSize: "14px",
					fontWeight: "fontWeightRegular",
					padding: "0 0 40px 0",
				}}
			>
				<ListItem divider={true}>
					Доставка по Україні компанією Нова Пошта. Доставка виконується зі складу в Києві до
					найближчого Вам відділення в Вашому населеному пункті. З нашого боку гроші за доставку не
					стягуються, але сама компанія бере гроші за надані послуги безпосереньо у відділенні (
					перевезення та страхування вантажу ). Доставка вартістю понад 4000 грн по Україні
					БЕЗКОШТОВНА ( ми беремо на себе оплату доставки пакунку ). Можлива післяплата. Можлива
					післяплата, але витрати з пересилання грошей завжди сплачує замовник.
				</ListItem>
				<ListItem divider={true}>
					Доставка по Україні поштою. Доставка виконується службою УкрПошта в будь-який населений
					пункт України. Вартість доставки сплачується покупцем ( тариф Укрпошти + 100 гривень ). На
					жаль, з технічних причин, накладений платіж для доставки УкрПоштою недоступний.
				</ListItem>
			</List>
			<Typography
				variant="subtitle2"
				fontWeight="fontWeightBolt"
				fontFamily="Open Sans, sans-serif"
				color="secondary"
				align="justify"
			>
				Доставка замовлень до інших країн:
			</Typography>
			<List
				sx={{
					color: "grey",
					fontFamily: "Open Sans, sans-serif",
					fontSize: "14px",
					fontWeight: "fontWeightRegular",
					padding: "0 0 40px 0",
				}}
			>
				<ListItem divider={true}>
					Доставка замовлень в будь-яку іншу країну виконується поштовою службою УкрПошти. Вартість
					доставки залежить від розмірів пакунка (зазвичай від 500 грн). Після зважування пакунка
					Вас буде проінформовано про точну вартість доставки.
				</ListItem>
			</List>

			<Typography textTransform="uppercase" variant="h5">
				Оплата
			</Typography>
			<Typography
				variant="subtitle2"
				fontWeight="fontWeightRegular"
				fontFamily="Open Sans, sans-serif"
				color="grey"
				pb={3}
				align="justify"
			>
				На сьогодні розрахуватися за замовлення можна будь-яким із запропонованих нижче способів.
				Також розглянемо запропоновані Вами варіанти.
			</Typography>
			<List
				sx={{
					color: "grey",
					fontFamily: "Open Sans, sans-serif",
					fontSize: "14px",
					fontWeight: "fontWeightRegular",
					padding: "0 0 40px 0",
				}}
			>
				<ListItem divider={true}>
					Оплата готівкою при доставці замовлення курєром (до станції метро, за адресою) в межах м.
					Київ.
				</ListItem>
				<ListItem divider={true}>
					Оплата готівкою в крамниці у випадку самовивозу. Після узгодження всіх деталей замовлення
					Вам повідомлять суму та час, коли можна забрати замовлення.
				</ListItem>
				<ListItem divider={true}>
					Оплата післяплатою по території України для способу доставки компанією Нова Пошта
					(накладений платіж доступний лише для замовлень вартістю від 300 грн.). Після узгодження
					всіх деталей замовлення Вам повідомлять суму до сплати та орієнтовну дату відправлення
					замовлення. В такому випадку Ви просто сплачуєте замовлення безпосередньо при отриманні
					пакунка у відділенні. На жаль, по технічним причинам післяплата для доставки УкрПоштою
					недоступна. До речі, це найдорожчий варіант оплати, адже зворотнє відправлення грошей
					(післяплати) сплачує отримувач пакунку.
				</ListItem>
				<ListItem divider={true}>
					Для оплати замовлень Ви також можете скористатися системою інтернет-банкінгу Приват24 чии
					платіжними терміналами ПриватБанку. Для використання даної опції при оформленні замовлення
					на сайті оберіть пункт Оплата на картку ПриватБанку. Після обробки та узгодження всіх
					деталей замовлення, Ви отримаєте SMS чи E-mail з реквізитами та сумою до сплати.
				</ListItem>
				<ListItem divider={true}>
					Оплата за допомогою системи грошових переказів PayPal. Після узгодження всіх деталей
					замовлення Ви отримаєте E-mail з реквізитами та сумою для сплати. Це найоптимальніший
					спосіб розрахунку для замовлень з інших країн.
				</ListItem>
			</List>
		</Container>
	);
};

export default PaymentAndDelivery;
