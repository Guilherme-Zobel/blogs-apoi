module.exports = (sequelize) => {
  const PostsCategorie = sequelize.define(
    'PostsCategorie', {},
    { timestamps: false, tableName: 'PostsCategories' },
  );
  
  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, { 
      through: PostsCategorie, foreignKey: 'postId', otherKey: 'categoryId', as: 'categories',
    });

    models.Categorie.belongsToMany(models.BlogPost, { 
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
    });
  };
  return PostsCategorie;
};