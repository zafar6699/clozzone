export default async (context) => {
    context.app.router.beforeEach((to, from) => {
      console.log('before', context )
    });

    context.app.router.afterEach((to, from) => {
        console.log('after', context)
    });
}