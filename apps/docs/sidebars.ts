import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    'about',
    'resume',
    'timeline',
    {
      type: 'category',
      label: 'Packages',
      link: { type: 'doc', id: 'packages/introduction' },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Universal Components Library',
          link: { type: 'doc', id: 'packages/universal-components-library/introduction' },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'DefaultButton',
              link: { type: 'doc', id: 'packages/universal-components-library/DefaultButton/DefaultButton' },
              collapsed: true,
              items: [
                'packages/universal-components-library/DefaultButton/DefaultButton'
              ],
            },
            {
              type: 'category',
              label: 'DefaultLongButton',
              link: { type: 'doc', id: 'packages/universal-components-library/DefaultLongButton/DefaultLongButton' },
              collapsed: true,
              items: [
                'packages/universal-components-library/DefaultLongButton/DefaultLongButton'
              ],
            },
            {
              type: 'category',
              label: 'Label',
              link: { type: 'doc', id: 'packages/universal-components-library/Label/Label' },
              collapsed: true,
              items: [
                'packages/universal-components-library/Label/Label'
              ],
            },
            {
              type: 'category',
              label: 'Input',
              link: { type: 'doc', id: 'packages/universal-components-library/Input/Input' },
              collapsed: true,
              items: [
                'packages/universal-components-library/Input/Input'
              ],
            },
          ],
        },
      ],
    },
  ]
};

export default sidebars;

