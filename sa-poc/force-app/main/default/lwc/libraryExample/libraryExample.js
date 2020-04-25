import { LightningElement, api, wire } from "lwc";


/**
 * Class of the example Lightning Web Component.
 */
export default class LibraryExample extends LightningElement {
  /** Input parameter for an arbitrary editorial text. */
  @api editorParam = "";

  /** Input parameter for a value to be sent to the Apex controller. */
  @api remoteParam = "";

  /** Input parameter for a value to be passed to a shared library. */
  @api libraryParam = "";

  /** Internal state to check if library content must be refreshed. */
  renderedLibraryParam = null;

  /** Remote data property receiving the result of the Apex method invocation. */
  remoteData;

  /** Method called each time the component is re-rendered. */
  async renderedCallback() {
    if (this.libraryParam === this.renderedLibraryParam) return;
    this.renderedLibraryParam = this.libraryParam;

    // Wait until the shared libary is ready to use. See exampleThemeLayoutController.js
    await window.ExampleLibrary.loaded;
    await this.insertLibraryContent();
  }

  async insertLibraryContent() {
    // Fetch the target element and insert the libary content.
    const element = this.template.querySelector(".library-content");
    await window.ExampleLibrary.insertContent(this.libraryParam, element);
  }

  connectedCallback(){
      this.remoteData = { "data" : "Balasaheb Wani"} ;
  }
}
