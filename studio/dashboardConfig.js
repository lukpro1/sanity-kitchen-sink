export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60638ee067f55f2bf5a66919',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3rynjrin',
                  apiId: 'fe65d281-ff3d-457a-bb80-100cf40991d6'
                },
                {
                  buildHookId: '60638ee0c46cb2423f64b6fd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-usp884oy',
                  apiId: '8c05e3ee-8124-43a2-97e3-3307b56d4853'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lukpro1/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-usp884oy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
