# EDS testing
# Introduction
This documentation outlines the process of creating a custom Lightbox component within the Edge Delivery Services (EDS) project. The Lightbox was designed based on data from a table in a Word document and implemented using JavaScript and CSS.

# Concept 

1. Table Generation in Word Document:

A table was created in a Word document where the first row defined the block name. For the Lightbox component, a class was generated to reflect the name of this block.

2. Development of the Custom Lightbox Component:
Within the EDS project, a custom Lightbox component was created, utilizing classes automatically generated by the Document Object Model (DOM) based on the table.

3. Linking Selectors in JavaScript and CSS:
The class assigned to the Lightbox component was identified and used as a selector in js and css files. This allowed for manipulation and styling of the component in accordance with project requirements.

# Implementation
1. Lightbox Component Structure:

Class Name: A class assigned by the DOM based on the block name in the Word table.
Files:
lightbox.js: Contains JavaScript logic for the Lightbox component.
lightbox.css: Style sheet defining the appearance of the Lightbox component.
2. Class Manipulation:

The class assigned to the Lightbox component was utilized for identifying and manipulating component elements in js and css files.

# Using the Component
1. Inserting the Component in Content:
In EDS content, the Lightbox component can be added by inserting a new block and selecting the appropriate class.

2. Customizing Styles and Behaviors:
Modifications in js and css files allow for customization of the appearance and behavior of the Lightbox component in line with project requirements.

# Summary
Creating a custom Lightbox component within the EDS project effectively utilized data from a table in a Word document. The generated class was efficiently employed to identify and manipulate the component, enabling consistent management of style and functionality.

This documentation serves as a reference point for the project team and future developers working with the Lightbox component within the EDS project.


## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
