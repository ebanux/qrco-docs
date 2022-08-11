/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/* @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = { 
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  tutorialSidebar: [
    'intro', 
    {
      type: 'category',
      label: 'The QR Link Creation',
      items: ['the_qr_link_creation/the_qr_link_creation'],
    },	
    {
      type: 'category',
      label: 'The QR Link Design',
      items: ['the_qr_link_design/the_qr_link_design','the_qr_link_design/samples', 'the_qr_link_design/tips'],
    },	
  ],
   
   
};

module.exports = sidebars;
