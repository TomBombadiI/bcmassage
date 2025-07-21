import { Fancybox } from "@fancyapps/ui";

class FancyboxCollection {
  constructor() {
    Fancybox.bind("[data-fancybox]");
  }
}

export default FancyboxCollection;
