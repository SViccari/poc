export default function(server) { 
	var user = server.create('user');
	server.create('goal', { name: "Emergency Fund", user: user.id });
	server.create('goal', { name: "Education Fund", user: user.id });
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
}
