export function initTableSorting() {
  document.addEventListener("DOMContentLoaded", () => {
    const tables = document.querySelectorAll(".sortable-table");

    tables.forEach((table) => {
      const headers = table.querySelectorAll("th.sortable");
      const tbody = table.querySelector("tbody");

      headers.forEach((header, columnIndex) => {
        header.addEventListener("click", () => {
          const sortType = (header as HTMLElement).dataset.sort;
          const currentOrder =
            (header as HTMLElement).dataset.order || "none";
          const newOrder = currentOrder === "asc" ? "desc" : "asc";

          // Remove sorting from other headers
          headers.forEach((h) => delete (h as HTMLElement).dataset.order);
          (header as HTMLElement).dataset.order = newOrder;

          // Get rows and sort
          if (!tbody) return;
          const rows = Array.from(tbody.querySelectorAll("tr"));

          // Separate Total row from other rows
          const totalRow = rows.find((row) => {
            const firstCell = row.children[0] as HTMLElement;
            return firstCell.textContent?.trim() === "Total";
          });
          const dataRows = rows.filter((row) => {
            const firstCell = row.children[0] as HTMLElement;
            return firstCell.textContent?.trim() !== "Total";
          });

          // Sort only data rows
          dataRows.sort((a, b) => {
            const cellA = a.children[columnIndex] as HTMLElement;
            const cellB = b.children[columnIndex] as HTMLElement;

            let valueA, valueB;

            if (sortType === "number") {
              valueA = parseFloat(cellA.dataset.value || "0") || 0;
              valueB = parseFloat(cellB.dataset.value || "0") || 0;
            } else if (sortType === "date") {
              valueA = new Date(cellA.dataset.value || 0).getTime();
              valueB = new Date(cellB.dataset.value || 0).getTime();
            } else {
              valueA = cellA.textContent?.trim().toLowerCase() || "";
              valueB = cellB.textContent?.trim().toLowerCase() || "";
            }

            if (valueA < valueB) return newOrder === "asc" ? -1 : 1;
            if (valueA > valueB) return newOrder === "asc" ? 1 : -1;
            return 0;
          });

          // Reappend Total row first, then sorted data rows
          if (totalRow) tbody.appendChild(totalRow);
          dataRows.forEach((row) => tbody.appendChild(row));
        });
      });
    });
  });
}
