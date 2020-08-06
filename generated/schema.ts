// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ExampleEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ExampleEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ExampleEntity", id.toString(), this);
  }

  static load(id: string): ExampleEntity | null {
    return store.get("ExampleEntity", id) as ExampleEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get newContract(): Bytes {
    let value = this.get("newContract");
    return value.toBytes();
  }

  set newContract(value: Bytes) {
    this.set("newContract", Value.fromBytes(value));
  }
}

export class SalesHistoryEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SalesHistoryEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SalesHistoryEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SalesHistoryEntity", id.toString(), this);
  }

  static load(id: string): SalesHistoryEntity | null {
    return store.get("SalesHistoryEntity", id) as SalesHistoryEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    return value.toBytes();
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get buyerAddress(): Bytes | null {
    let value = this.get("buyerAddress");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set buyerAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("buyerAddress");
    } else {
      this.set("buyerAddress", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get collectable(): string {
    let value = this.get("collectable");
    return value.toString();
  }

  set collectable(value: string) {
    this.set("collectable", Value.fromString(value));
  }

  get timeStamp(): BigInt {
    let value = this.get("timeStamp");
    return value.toBigInt();
  }

  set timeStamp(value: BigInt) {
    this.set("timeStamp", Value.fromBigInt(value));
  }
}

export class CollectableEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CollectableEntity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CollectableEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CollectableEntity", id.toString(), this);
  }

  static load(id: string): CollectableEntity | null {
    return store.get("CollectableEntity", id) as CollectableEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get isAttached(): BigInt | null {
    let value = this.get("isAttached");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set isAttached(value: BigInt | null) {
    if (value === null) {
      this.unset("isAttached");
    } else {
      this.set("isAttached", Value.fromBigInt(value as BigInt));
    }
  }

  get sequenceId(): BigInt | null {
    let value = this.get("sequenceId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set sequenceId(value: BigInt | null) {
    if (value === null) {
      this.unset("sequenceId");
    } else {
      this.set("sequenceId", Value.fromBigInt(value as BigInt));
    }
  }

  get teamId(): i32 {
    let value = this.get("teamId");
    return value.toI32();
  }

  set teamId(value: i32) {
    this.set("teamId", Value.fromI32(value));
  }

  get positionId(): i32 {
    let value = this.get("positionId");
    return value.toI32();
  }

  set positionId(value: i32) {
    this.set("positionId", Value.fromI32(value));
  }

  get creationTime(): BigInt | null {
    let value = this.get("creationTime");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set creationTime(value: BigInt | null) {
    if (value === null) {
      this.unset("creationTime");
    } else {
      this.set("creationTime", Value.fromBigInt(value as BigInt));
    }
  }

  get attributes(): BigInt | null {
    let value = this.get("attributes");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set attributes(value: BigInt | null) {
    if (value === null) {
      this.unset("attributes");
    } else {
      this.set("attributes", Value.fromBigInt(value as BigInt));
    }
  }

  get playerOverrideId(): BigInt | null {
    let value = this.get("playerOverrideId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set playerOverrideId(value: BigInt | null) {
    if (value === null) {
      this.unset("playerOverrideId");
    } else {
      this.set("playerOverrideId", Value.fromBigInt(value as BigInt));
    }
  }

  get mlbGameId(): BigInt | null {
    let value = this.get("mlbGameId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mlbGameId(value: BigInt | null) {
    if (value === null) {
      this.unset("mlbGameId");
    } else {
      this.set("mlbGameId", Value.fromBigInt(value as BigInt));
    }
  }

  get currentGameCardId(): BigInt | null {
    let value = this.get("currentGameCardId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set currentGameCardId(value: BigInt | null) {
    if (value === null) {
      this.unset("currentGameCardId");
    } else {
      this.set("currentGameCardId", Value.fromBigInt(value as BigInt));
    }
  }

  get mlbPlayerId(): BigInt | null {
    let value = this.get("mlbPlayerId");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set mlbPlayerId(value: BigInt | null) {
    if (value === null) {
      this.unset("mlbPlayerId");
    } else {
      this.set("mlbPlayerId", Value.fromBigInt(value as BigInt));
    }
  }

  get earnedBy(): BigInt | null {
    let value = this.get("earnedBy");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set earnedBy(value: BigInt | null) {
    if (value === null) {
      this.unset("earnedBy");
    } else {
      this.set("earnedBy", Value.fromBigInt(value as BigInt));
    }
  }

  get generationSeason(): BigInt | null {
    let value = this.get("generationSeason");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set generationSeason(value: BigInt | null) {
    if (value === null) {
      this.unset("generationSeason");
    } else {
      this.set("generationSeason", Value.fromBigInt(value as BigInt));
    }
  }

  get salesHistories(): Array<string> | null {
    let value = this.get("salesHistories");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set salesHistories(value: Array<string> | null) {
    if (value === null) {
      this.unset("salesHistories");
    } else {
      this.set("salesHistories", Value.fromStringArray(value as Array<string>));
    }
  }

  get tokenURI(): string | null {
    let value = this.get("tokenURI");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string | null) {
    if (value === null) {
      this.unset("tokenURI");
    } else {
      this.set("tokenURI", Value.fromString(value as string));
    }
  }
}
