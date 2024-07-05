function truncateHtmlContent(htmlContent: string, maxLength: number) {
  // Create a temporary DOM element to strip HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;
  const textContent = tempElement.textContent || tempElement.innerText || "";

  if (textContent.length <= maxLength) {
    return textContent;
  }

  return textContent.substring(0, maxLength) + "...";
}
export default truncateHtmlContent;
