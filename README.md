# **A React Component Library**

A reusable React component library with Storybook documentation and unit testing.

## **📌 Features**

- **Reusable React Component** – Designed for flexibility and customization
- **CSS Modules for Styling** – Scoped styles to prevent conflicts
- **Responsive & Accessible** – Ensures a seamless experience across devices
- **Storybook Integration** – Live interactive documentation
- **Unit Testing** – Tested with @storybook/test to validate component behaviour and interactions within Storybook
- **TypeScript Support** – Ensuring type safety

## **🚀 Getting Started**

### **1️⃣ Clone the Repository**

```sh
https://github.com/ShubinZhong/axcelerate-coding-assessment.git
```

### **2️⃣ Install required Node.js**

To ensure compatibility, use NVM (Node Version Manager) to install the required Node.js version `v20.11.0`.

### **3️⃣ Install Project Dependencies**

```sh
npm install
```

### **4️⃣ Run Storybook**

```sh
npm run storybook
```

This will launch Storybook in your browser, where you can interact with the component.

## **📖 Storybook Documentation**

Storybook provides a live environment where you can test different props and variations.

### Component Documentation

For each component, you can find detailed documentation under the **Docs** tab in Storybook. This includes a description of the component, its props, its variations, usage examples, and interactive elements.

### Running Component Tests in Storybook

- In Storybook, locate the **SearchableList** component story. You will see stories starting with **Test**; these are the component tests.
- Open the Addons panel in Storybook.
  Click on the Interactions tab to view and run tests directly within Storybook.

## **⚠️ Attention Notes**

### 1. **Not Able to load the page at first time?**

- **⚠️ Important:** Due to the a bug memtioned [here](https://github.com/storybookjs/storybook/issues/30335#issuecomment-2616329782), you may encounter an issue when loading the page for the first time. Refreshing the page should resolve it.

### 2. **Responsive Design**

- **⚠️ Important:** Due to the absence of tablet or desktop designs in the provided Figma files, all components are designed to stretch and fill the available screen size, ensuring basic responsiveness. However, additional refinements may be necessary for optimal display on different screen sizes.
