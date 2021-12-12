import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import User from "./User";

// TODO validation

interface RideAttributes {
  user_id: string;
  ride_id: string;
  date: number;
  speed?: number;
  voltage?: number;
  pwm?: number;
  current?: number;
  power?: number;
  battery_level?: number;
  total_mileage?: number;
  temperature?: number;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type RideInput = Optional<RideAttributes, "ride_id">;
export type RideOutput = Required<RideAttributes>;

class Ride extends Model<RideAttributes, RideInput> implements RideAttributes {
  ride_id!: string;
  user_id!: string;
  date!: number;
  speed!: number;
  voltage!: number;
  pwm!: number;
  current!: number;
  power!: number;
  battery_level!: number;
  total_mileage!: number;
  temperature!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

// User.hasMany(Ride,  { foreignKey: 'user_id' })
// Ride.belongsTo(User, { foreignKey: 'ride_id' });

Ride.init(
  {
    ride_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
    },

    date: {
      type: DataTypes.DATE,
    },
    speed: {
      type: DataTypes.DOUBLE,
    },
    voltage: {
      type: DataTypes.DOUBLE,
    },
    pwm: {
      type: DataTypes.DOUBLE,
    },
    current: {
      type: DataTypes.DOUBLE,
    },
    power: {
      type: DataTypes.DOUBLE,
    },
    battery_level: {
      type: DataTypes.DOUBLE,
    },
    total_mileage: {
      type: DataTypes.DOUBLE,
    },
    temperature: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // timestamps: true,
    sequelize: sequelizeConnection,
    tableName: "rides",
    // paranoid: true
    timestamps: false,
  }
);

export default Ride;
