import { ZigbeeRelationship } from "./types";

interface LinkType {
  title: string;
  relationship: ZigbeeRelationship;
}
export const linkTypes: LinkType[] = [
  {
      title: 'IsParent',
      relationship: ZigbeeRelationship.NeigbhorIsParent
  },
  {
      title: 'IsAChild',
      relationship: ZigbeeRelationship.NeigbhorIsAChild
  },
  {
      title: 'IsASibling',
      relationship: ZigbeeRelationship.NeigbhorIsASibling
  },
  {
      title: 'NoneOfTheAbove',
      relationship: ZigbeeRelationship.NoneOfTheAbove
  }
];