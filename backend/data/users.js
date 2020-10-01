import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@gmail.com",
		password: bcrypt.hashSync("12345", 10),
		isAdmin: true
	},
	{
		name: "Isabel Chua",
		email: "isa@gmail.com",
		password: bcrypt.hashSync("12345", 10)
	},
	{
		name: "Andrew dela Serna",
		email: "andrew@gmail.com",
		password: bcrypt.hashSync("12345", 10)
	}
];

export default users;
