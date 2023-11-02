import { Component, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent {
[x: string]: any;
    @ViewChild('op') overlayPanel!: OverlayPanel;

    categories = [
        { name: 'Category 1' },
        { name: 'Category 2' },
        { name: 'Category 3' },
      ];

    selectedCategory: any;
    searchText: string = '';
    Orders = [
    { id: 1, nombre: 'Order A', descripcion: 'Description A', cantidad: 10, precio: 50, preciodoc: 5, estado: 'Activo' },
    { id: 2, nombre: 'Order B', descripcion: 'Description B', cantidad: 20, precio: 60, preciodoc: 6, estado: 'Inactivo' },
    { id: 3, nombre: 'Order C', descripcion: 'Description C', cantidad: 5, precio: 40, preciodoc: 4, estado: 'Activo' },
    ];

    get filteredOrders() {
        return this.Orders.filter((Order) => {
          return (
            (!this.selectedCategory || Order.estado === this.selectedCategory.name) &&
            (this.searchText === '' || Order.nombre.includes(this.searchText))
          );
        });
      }

    // Function to show overlaypanel and form
    editingOrder: any = null;
    editOrder(order: any, event: Event) {
        this.editingOrder = { ...order };
        this.overlayPanel.show(event);
    }

      // Function to cancel editing
    cancelEdit() {
        this.editingOrder = null;
    }

      // Function to update the order after editing
    updateOrder() {
        const index = this.Orders.findIndex((o) => o.id === this.editingOrder.id);

        if (index !== -1) {
        // Update the order in the array
        this.Orders[index] = { ...this.editingOrder };
        this.editingOrder = null; // Clear the editing form
        }
    }

    deleteOrder(order: any) {
        const index = this.Orders.findIndex((o) => o.id === order.id);

        if (index !== -1) {
        // Remove the order from the array
        this.Orders.splice(index, 1);
        }
    }


}
