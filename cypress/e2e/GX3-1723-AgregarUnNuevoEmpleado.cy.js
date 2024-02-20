describe('GX3-1723 | [Automation] OrangeHRM | PIM | Agregar un nuevo empleado', () => {
	beforeEach('PRC: Ingresar a la pagina y hacer Login', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		cy.get('input[name=username]').type('Admin');
		cy.get('input[name=password]').type('admin123');
		cy.get('.oxd-button').click();
		cy.get(':nth-child(2) > .oxd-main-menu-item').click();
		cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
	});
	it('1723| TC1: Validar registrar un nuevo empleado', () => {
		// Formulario para registrar un nuevo empleado en la lista
		cy.fixture('data/GX3-1723-DatosParaProbar.json').then(data => {
			cy.get('input[name=firstName]').type(data.credencialesValidasAgregarEmpleado.FirstName);
			cy.get('input[name=middleName]').type(data.credencialesValidasAgregarEmpleado.MiddleName);
			cy.get('input[name=lastName]').type(data.credencialesValidasAgregarEmpleado.LastName);
			cy.get('input[name=active]').clear();
			cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.credencialesValidasAgregarEmpleado.EmployeeId);
			cy.get('.oxd-switch-input').click();
			// Formulario para registrar un nuevo empleado con credenciales válidas
			cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(
				data.credencialesValidasRegistrarEmpleado.UserName
			);
			cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.credencialesValidasRegistrarEmpleado.Password);
			cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(
				data.credencialesValidasRegistrarEmpleado.ConfirmPassword
			);
			cy.get('.oxd-button--secondary').click();
		});
	});

	it.skip('US # | TC#2: Aquí puedes escribir otro Caso de Prueba', () => {
		cy.get('[href="/commands/querying"]').eq(2).click();
		cy.get('#query-btn');
		it.skip('US # | TC#3: Aquí puedes escribir otro Caso de Prueba', () => {
			cy.get('[href="/commands/querying"]').eq(2).click();
			cy.get('#query-btn').click();
			cy.get('.query-btn');
		});
	});
});
