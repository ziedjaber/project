import { Schema, model } from "mongoose";

interface User {
    clerkId: string;
    email: string;
    userName?: string;
    firstName: string;
    lastName: string;
    photo: string;
    events: Array<string>;
    orders: Array<string>;
}

const UserSchema = new Schema<User>({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true }, // Make sure 'userName' matches the property in your webhook payload
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
});

const User = model<User>("User", UserSchema);

export default User;
