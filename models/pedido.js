export default (sequelize, DataTypes) => {
    const Pedido = sequelize.define("pedido", {
        cor: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        }
    })

    return Pedido;
};

