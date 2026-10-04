# GLOBAL LAW Data Architecture

## Design principle

The repository is the controlled source for legal knowledge and software. Legal knowledge itself is structured as linked, versioned objects rather than unstructured documents.

## Core entities

1. Jurisdiction
2. Legal system
3. Legal instrument
4. Provision
5. Version
6. Court
7. Case or judgment
8. Institution
9. Legal concept
10. Terminology entry
11. Treaty
12. Source
13. Relationship
14. Investigation
15. Unresolved question

## Identity

Every entity receives a stable internal identifier. Human-readable titles may change; internal identity must remain stable.

## Graph model

GLOBAL LAW should be treated as a legal knowledge graph.

Example:

Jurisdiction
-> Legal system
-> Constitution
-> Provision
-> Amending instrument
-> Court interpretation
-> Legal concept
-> Related provision in another jurisdiction

## Separation of concerns

Source records describe where evidence came from.

Legal objects describe what the law or legal institution is.

Research records describe what GLOBAL LAW has established.

Explanations describe how the platform communicates the evidence to citizens.

These must not be merged into one undifferentiated text field.

## Scalability

The design must permit migration from repository files to a database/search index without changing the conceptual data model.

Do not make URLs, filenames, or website routes the permanent identity of legal objects.
