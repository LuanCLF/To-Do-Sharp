function getClassStatus(value) {
  let classStatus = "";

  switch (value) {
    case "Realizada":
      classStatus = "text-success";
      break;
    case "Em atraso":
      classStatus = "text-danger";
      break;
    case "Em andamento":
      classStatus = "text-primary";
      break;

    default:
      classStatus = "text-warning";
  }

  return classStatus;
}
