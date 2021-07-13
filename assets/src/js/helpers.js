// Creates Nodes with attributes
// params: object

function createNode(nodeType, attributes) {
	const element = document.createElement(nodeType);
	for (x in attributes) {
		attribute = document.createAttribute(attributes[x]);
		attribute.value = attribute[x][0];
		element.setAttribute(attribute);
	}
}

export default createNode;
