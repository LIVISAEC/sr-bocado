/* SR. BOCADO — CATÁLOGO EDITABLE
   Para agregar fotografías, guarda la imagen en la carpeta imagenes y cambia:
   foto: '' por foto: 'imagenes/nombre-de-la-foto.png'
   Los precios y productos provienen de las dos cartas compartidas por el restaurante.
   Para editar WhatsApp: reemplaza whatsapp por el número oficial en formato internacional, solo dígitos.
*/
window.SR_BOCADO = {
  whatsapp: '593980858399', // En la carta: 0980858399
  moneda: 'USD',
  productos: [
    // HAMBURGUESAS SENCILLAS: pan brioche, cheddar, vegetales frescos y salsas de la casa.
    {id:'sencilla-res', categoria:'Hamburguesas sencillas', nombre:'Hamburguesa Sencilla de Res', descripcion:'Pan brioche, queso cheddar, vegetales frescos y salsas de la casa. Medallón de res.', precio:6.50, foto:'', icono:'🍔', etiqueta:'SENCILLA'},
    {id:'sencilla-chorizo', categoria:'Hamburguesas sencillas', nombre:'Hamburguesa Sencilla de Chorizo Artesanal', descripcion:'Pan brioche, queso cheddar, vegetales frescos y salsas de la casa. Medallón artesanal de chorizo.', precio:7.50, foto:'', icono:'🍔', etiqueta:'ARTESANAL'},
    {id:'sencilla-morcilla', categoria:'Hamburguesas sencillas', nombre:'Hamburguesa Sencilla de Morcilla Artesanal', descripcion:'Pan brioche, queso cheddar, vegetales frescos y salsas de la casa. Medallón artesanal de morcilla.', precio:7.50,foto:'imagenes/hamburguesa-sencilla-morcilla.png', icono:'🍔', etiqueta:'ARTESANAL'},
    // HAMBURGUESAS DOBLES: doble porción de carne, doble cheddar, vegetales y salsas.
    {id:'doble-res', categoria:'Hamburguesas dobles', nombre:'Hamburguesa Doble de Res', descripcion:'Pan brioche, doble porción de carne de res, doble queso cheddar, vegetales frescos y salsas de la casa.', precio:10.00, foto:'', icono:'🍔', etiqueta:'DOBLE'},
    {id:'doble-chorizo', categoria:'Hamburguesas dobles', nombre:'Hamburguesa Doble de Chorizo Artesanal', descripcion:'Pan brioche, doble porción de medallón de chorizo artesanal, doble queso cheddar, vegetales frescos y salsas de la casa.', precio:11.50, foto:'', icono:'🍔', etiqueta:'DOBLE'},
    {id:'doble-morcilla', categoria:'Hamburguesas dobles', nombre:'Hamburguesa Doble de Morcilla Artesanal', descripcion:'Pan brioche, doble porción de medallón de morcilla artesanal, doble queso cheddar, vegetales frescos y salsas de la casa.', precio:11.50, foto:'', icono:'🍔', etiqueta:'DOBLE'},
    // HAMBURGUESAS PREMIUM: pan brioche, cheddar, cebolla caramelizada, tocino y salsas.
    {id:'premium-res', categoria:'Hamburguesas premium', nombre:'Hamburguesa Premium de Res', descripcion:'Pan brioche, queso cheddar, cebolla caramelizada, tocino y salsas de la casa. Medallón de res.', precio:7.60, foto:'', icono:'🍔', etiqueta:'PREMIUM'},
    {id:'premium-chorizo', categoria:'Hamburguesas premium', nombre:'Hamburguesa Premium de Chorizo Artesanal', descripcion:'Pan brioche, queso cheddar, cebolla caramelizada, tocino y salsas de la casa. Medallón de chorizo artesanal elaborado desde cero.', precio:8.40, foto:'imagenes/hamburguesa-chorizo.png', icono:'🍔', etiqueta:'DE AUTOR'},
    {id:'premium-morcilla', categoria:'Hamburguesas premium', nombre:'Hamburguesa Premium de Morcilla Artesanal', descripcion:'Pan brioche, queso cheddar, cebolla caramelizada, tocino y salsas de la casa. Medallón de morcilla artesanal.', precio:8.40, foto:'', icono:'🍔', etiqueta:'ARTESANAL'},
    // PREMIUM DOBLE
    {id:'premium-doble-res', categoria:'Hamburguesas premium dobles', nombre:'Hamburguesa Premium Doble de Res', descripcion:'Pan brioche, doble porción de carne de res, doble queso cheddar, tocino, cebolla caramelizada y salsas de la casa.', precio:10.00, foto:'imagenes/premium-doble-res.png', icono:'🍔', etiqueta:'PREMIUM DOBLE'},
    {id:'premium-doble-chorizo', categoria:'Hamburguesas premium dobles', nombre:'Hamburguesa Premium Doble de Chorizo Artesanal', descripcion:'Pan brioche, doble porción de chorizo artesanal, doble queso cheddar, tocino, cebolla caramelizada y salsas de la casa.', precio:11.50, foto:'', icono:'🍔', etiqueta:'PREMIUM DOBLE'},
    {id:'premium-doble-morcilla', categoria:'Hamburguesas premium dobles', nombre:'Hamburguesa Premium Doble de Morcilla Artesanal', descripcion:'Pan brioche, doble porción de morcilla artesanal, doble queso cheddar, tocino, cebolla caramelizada y salsas de la casa.', precio:11.50, foto:'', icono:'🍔', etiqueta:'PREMIUM DOBLE'},
    // ACOMPAÑAMIENTOS Y OTROS PLATOS
    {id:'papas-adicionales', categoria:'Acompañamientos y platos', nombre:'Porción de Papas Fritas', descripcion:'Porción de papas fritas para complementar tu hamburguesa.', precio:1.50, foto:'', icono:'🍟', etiqueta:'COMPLEMENTO'},
    {id:'sandwich-pollo', categoria:'Acompañamientos y platos', nombre:'Sándwich de Pollo', descripcion:'Pan ciabatta con corteza semicrujiente, pollo a la plancha, queso mozzarella, vegetales y salsas de la casa.', precio:8.50, foto:'', icono:'🥪', etiqueta:''},
    {id:'alitas-bbq', categoria:'Acompañamientos y platos', nombre:'Alitas BBQ', descripcion:'Cinco alitas acompañadas de papas fritas y salsas BBQ o mostaza y miel.', precio:6.00, foto:'', icono:'🍗', etiqueta:''},
    {id:'papas-bocado', categoria:'Acompañamientos y platos', nombre:'Papas Bocado', descripcion:'Papas fritas con tocino, queso cheddar, mayonesa y salsa.', precio:6.50, foto:'', icono:'🍟', etiqueta:''},
    {id:'pollo-bocado', categoria:'Acompañamientos y platos', nombre:'Pollo Bocado', descripcion:'Papas fritas crujientes, pollo a la plancha en trozos, tocino crocante, lluvia de queso cheddar líquido, salsa de tomate y mayonesa.', precio:7.50, foto:'', icono:'🍗', etiqueta:''},
    {id:'spaghetti-bolonesa', categoria:'Acompañamientos y platos', nombre:'Spaghetti a la Boloñesa', descripcion:'Spaghetti a la boloñesa.', precio:8.00, foto:'', icono:'🍝', etiqueta:''},
    {id:'spaghetti-pesto', categoria:'Acompañamientos y platos', nombre:'Spaghetti al Pesto', descripcion:'Spaghetti al pesto.', precio:6.50, foto:'', icono:'🍝', etiqueta:''},
    {id:'panini', categoria:'Acompañamientos y platos', nombre:'Panini', descripcion:'Pan ciabatta con salsa de pizza, queso mozzarella, un toque de orégano, jamón y aceitunas.', precio:7.50, foto:'', icono:'🥪', etiqueta:''},
    // BEBIDAS FRESCAS
    {id:'colas', categoria:'Bebidas frescas', nombre:'Colas', descripcion:'Refresco gaseoso. Sabor por confirmar.', precio:1.90, foto:'imagenes/coca-cola.webp', icono:'🥤', etiqueta:''},
    {id:'agua', categoria:'Bebidas frescas', nombre:'Agua', descripcion:'Agua.', precio:2.00, foto:'', icono:'💧', etiqueta:''},
    {id:'agua-gas', categoria:'Bebidas frescas', nombre:'Agua con Gas', descripcion:'Agua con gas.', precio:2.00, foto:'', icono:'💧', etiqueta:''},
    {id:'jugo-frutas', categoria:'Bebidas frescas', nombre:'Jugo de Frutas', descripcion:'Jugo de frutas. Sabor por confirmar.', precio:2.60,foto:'imagenes/jugos-frutas.png', icono:'🧃', etiqueta:''},
    {id:'milkshake-frutas', categoria:'Bebidas frescas', nombre:'Milk Shake de Frutas', descripcion:'Milk shake de frutas. Sabor por confirmar.', precio:2.90, foto:'', icono:'🥤', etiqueta:''},
    {id:'milkshake-chocolate', categoria:'Bebidas frescas', nombre:'Milk Shake de Chocolate', descripcion:'Milk shake de chocolate.', precio:2.90, foto:'', icono:'🥤', etiqueta:''},
    {id:'milkshake-cafe', categoria:'Bebidas frescas', nombre:'Milk Shake de Café', descripcion:'Milk shake de café.', precio:2.90, foto:'', icono:'🥤', etiqueta:''},
    {id:'fuze-tea', categoria:'Bebidas frescas', nombre:'Fuze Tea', descripcion:'Fuze Tea. Presentación por confirmar.', precio:2.00, foto:'', icono:'🧋', etiqueta:''},
    // BEBIDAS DE CHARLA
    {id:'cafe-americano', categoria:'Bebidas de charla', nombre:'Café Americano', descripcion:'Café americano.', precio:2.00, foto:'', icono:'☕', etiqueta:''},
    {id:'cappuccino', categoria:'Bebidas de charla', nombre:'Cappuccino', descripcion:'Cappuccino.', precio:2.50, foto:'', icono:'☕', etiqueta:''},
    {id:'cafe-espresso', categoria:'Bebidas de charla', nombre:'Café Espresso', descripcion:'Café espresso.', precio:2.00, foto:'', icono:'☕', etiqueta:''},
    {id:'te-caliente', categoria:'Bebidas de charla', nombre:'Té Caliente', descripcion:'Té caliente.', precio:1.50, foto:'', icono:'🍵', etiqueta:''},
    {id:'chocolate-caliente', categoria:'Bebidas de charla', nombre:'Chocolate Caliente', descripcion:'Chocolate caliente.', precio:3.00, foto:'', icono:'☕', etiqueta:''},
    {id:'cinnamon-rolls', categoria:'Postres', nombre:'Cinnamon Rolls', descripcion:'Rollos de canela.', precio:3.50, foto:'', icono:'🥐', etiqueta:''},
    // BEBIDAS DE CELEBRACIÓN
    {id:'jarra-sangria', categoria:'Bebidas de celebración', nombre:'Jarra de Sangría', descripcion:'Jarra de sangría.', precio:18.00, foto:'', icono:'🍷', etiqueta:''},
    {id:'media-jarra-sangria', categoria:'Bebidas de celebración', nombre:'Media Jarra de Sangría', descripcion:'Media jarra de sangría.', precio:12.00, foto:'', icono:'🍷', etiqueta:''},
    {id:'copa-sangria', categoria:'Bebidas de celebración', nombre:'Copa de Sangría', descripcion:'Copa de sangría.', precio:5.50, foto:'', icono:'🍷', etiqueta:''},
    {id:'cerveza-pilsener', categoria:'Bebidas de celebración', nombre:'Cerveza Pilsener', descripcion:'Cerveza Pilsener.', precio:4.00, foto:'', icono:'🍺', etiqueta:''},
    {id:'cerveza-club-verde', categoria:'Bebidas de celebración', nombre:'Cerveza Club Verde', descripcion:'Cerveza Club Verde.', precio:4.00, foto:'', icono:'🍺', etiqueta:''},
    {id:'cerveza-corona', categoria:'Bebidas de celebración', nombre:'Cerveza Corona', descripcion:'Cerveza Corona.', precio:5.00, foto:'', icono:'🍺', etiqueta:''},
    // CÓCTELES
    {id:'margarita-maracuya', categoria:'Cócteles', nombre:'Margarita Frozen Maracuyá', descripcion:'Margarita frozen de maracuyá.', precio:7.50, foto:'imagenes/margarita-maracuya.png', icono:'🍹', etiqueta:''},
    {id:'margarita-mora', categoria:'Cócteles', nombre:'Margarita Frozen Mora', descripcion:'Margarita frozen de mora.', precio:7.50, foto:'', icono:'🍹', etiqueta:''},
    {id:'margarita-frutilla', categoria:'Cócteles', nombre:'Margarita Frozen Frutilla', descripcion:'Margarita frozen de frutilla.', precio:7.50, foto:'', icono:'🍹', etiqueta:''},
    {id:'margarita-clasico', categoria:'Cócteles', nombre:'Margarita Frozen Clásico', descripcion:'Margarita frozen clásica.', precio:6.50, foto:'imagenes/margarita-clasica.png', icono:'🍹', etiqueta:''},
    {id:'tequila-sunrise', categoria:'Cócteles', nombre:'Tequila Sunrise', descripcion:'Tequila Sunrise.', precio:5.00, foto:'', icono:'🍹', etiqueta:''},
    {id:'vodka-naranja', categoria:'Cócteles', nombre:'Vodka Naranja', descripcion:'Vodka naranja.', precio:5.00, foto:'', icono:'🍹', etiqueta:''},
    {id:'vodka-bocado', categoria:'Cócteles', nombre:'Vodka Bocado', descripcion:'Vodka Bocado.', precio:5.00, foto:'', icono:'🍹', etiqueta:''},
    {id:'cuba-libre', categoria:'Cócteles', nombre:'Cuba Libre', descripcion:'Cuba Libre.', precio:5.00, foto:'', icono:'🍹', etiqueta:''}
  ]
};
