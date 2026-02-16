import { CartItem } from "@/types";
import { formatPrice } from "./utils";

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  notifyNewDrops: boolean;
}

export function formatOrderMessage(
  items: CartItem[],
  customerDetails: CustomerDetails,
  subtotal: number,
  shipping: number,
  tax: number,
  total: number
): string {
  const customerName = `${customerDetails.firstName} ${customerDetails.lastName}`;
  const location = `${customerDetails.city}, ${customerDetails.country}`;
  
  let message = `🛒 NEW ORDER FROM ${customerName.toUpperCase()}\n\n`;
  
  // Customer Details
  message += `👤 CUSTOMER INFO:\n`;
  message += `Name: ${customerName}\n`;
  message += `Email: ${customerDetails.email}\n`;
  message += `Phone: ${customerDetails.phone}\n`;
  message += `Location: ${location}\n`;
  message += `Address: ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.state} ${customerDetails.zipCode}, ${customerDetails.country}\n\n`;
  
  // Order Items
  message += `📦 ORDER ITEMS:\n`;
  items.forEach((item, index) => {
    const price = item.product.salePrice || item.product.price;
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   Size: ${item.size} | Qty: ${item.quantity}\n`;
    if (item.customName && item.customNumber) {
      message += `   ⚽ Customization: ${item.customName} #${item.customNumber}\n`;
    }
    message += `   Price: ${formatPrice(price * item.quantity)}\n\n`;
  });
  
  // Order Summary
  message += `💰 ORDER SUMMARY:\n`;
  message += `Subtotal: ${formatPrice(subtotal)}\n`;
  message += `Shipping: ${shipping === 0 ? "FREE" : formatPrice(shipping)}\n`;
  message += `Tax: ${formatPrice(tax)}\n`;
  message += `TOTAL: ${formatPrice(total)}\n\n`;
  
  // New Drops Opt-in
  if (customerDetails.notifyNewDrops) {
    message += `🔔 Customer opted in for new drop notifications!\n\n`;
  }
  
  message += `✅ Please confirm this order and provide shipping timeline.`;
  
  return message;
}

export function getWhatsAppCheckoutURL(
  phoneNumber: string,
  items: CartItem[],
  customerDetails: CustomerDetails,
  subtotal: number,
  shipping: number,
  tax: number,
  total: number
): string {
  const message = formatOrderMessage(items, customerDetails, subtotal, shipping, tax, total);
  const encodedMessage = encodeURIComponent(message);
  
  // Remove any non-digit characters from phone number
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function getInstagramDMURL(username: string): string {
  // Instagram doesn't support pre-filled DM text via URL
  // This opens Instagram DM to the specified username
  return `https://ig.me/m/${username}`;
}

export function copyOrderMessageToClipboard(
  items: CartItem[],
  customerDetails: CustomerDetails,
  subtotal: number,
  shipping: number,
  tax: number,
  total: number
): void {
  const message = formatOrderMessage(items, customerDetails, subtotal, shipping, tax, total);
  
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(message).catch(console.error);
  }
}
